import { Component } from 'react';
import Song from '../Song/Song';
import NewSong from '../NewSong/NewSong';
import RotationContext from '../RotationContext';
import config from '../config';
import moment from 'moment';
import './Exchange.css';

export default class Exchange extends Component {
    static contextType = RotationContext

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.exId,
            title: '',
            date_created: '',
            created_by: '',
            songs: [],
            users: [],
            new_song: null
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }

        fetch(`${config.API_ENDPOINT}/users/`, options)
            .then(res => {
                if (!res.ok) {
                return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(users => {
                this.setState({
                    users
                })
            })
            .catch(err => console.log(err))

        fetch(`${config.API_ENDPOINT}/exchanges/${this.state.id}`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(exchange => {
                const { id, title, date_created, created_by, songs } = exchange
                const songsWithComm = songs.map(song => {
                    song.new_comment = ''
                    return song
                })
                this.setState({
                    id,
                    title,
                    date_created,
                    created_by,
                    songs: songsWithComm
                })
            })
            .catch(err => console.log(err))
    }

    updateComment = (comment, songIdx) => {
        const songs = this.state.songs
        songs[songIdx].new_comment = comment
        this.setState({ songs })
    }

    handleCommentSubmit = (e, songIdx) => {
        e.preventDefault()

        const newComment = {
            message: this.state.songs[songIdx].new_comment,
            song_id: this.state.songs[songIdx].id,
            created_by: this.context.current_user.id,
            exchange_id: this.state.id
        }
        console.log(newComment)

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        }

        fetch(`${config.API_ENDPOINT}/comments/`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(comment => {
                const songs = this.state.songs
                songs[songIdx].comments.push(comment)
                songs[songIdx].new_comment = ''
                this.setState({ songs })
                this.context.updateExchanges()
            })
            .catch(err => console.log(err))
    }

    addSongForm() {
        this.setState({
            new_song: {
                title: "",
                url_link: "",
                artist: "",
                album: ""
            }
        })
    }

    updateTitle = (title) => {
        this.setState({
            new_song: {
                ...this.state.new_song,
                title
            }
        })
    }

    updateLink = (url_link) => {
        this.setState({
            new_song: {
                ...this.state.new_song,
                url_link
            }
        })
    }

    updateArtist = (artist) => {
        this.setState({
            new_song: {
                ...this.state.new_song,
                artist
            }
        })
    }

    updateAlbum = (album) => {
        this.setState({
            new_song: {
                ...this.state.new_song,
                album
            }
        })
    }

    handleSongSubmit = (e) => {
        e.preventDefault()

        const { title, url_link, artist, album } = this.state.new_song
        const exchange_id = this.state.id
        const added_by = this.context.current_user.id

        const newSong = {
            title,
            url_link,
            artist,
            album,
            added_by,
            exchange_id
        }

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSong)
        }

        fetch(`${config.API_ENDPOINT}/songs/`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err})
                }
                return res.json()
            })
            .then(song => {
                this.setState({
                    songs: [
                        ...this.state.songs,
                        song
                    ]
                })
                this.context.updateExchanges()
            })
            .catch(err => console.log(err))
    }

    render() {
        const songs = this.state.songs.map((song, i) => {
            return (
                <Song 
                    users={this.state.users} 
                    song={song} 
                    index={i} 
                    key={i}
                    handleComment={this.updateComment}
                    handleCommentSubmit={this.handleCommentSubmit}
                />
            ) 
        })

        const AddSong = this.state.new_song 
        ? <form onSubmit={e => this.handleSongSubmit(e)}>
            <NewSong 
                index={1}
                handleTitle={this.updateTitle}
                handleLink={this.updateLink}
                handleArtist={this.updateArtist}
                handleAlbum={this.updateAlbum}
            />
            <button>Add To Exchange</button>
        </form>
        : <button id="ex-add-song-btn" onClick={e => this.addSongForm(e)}>Add Song</button> 

        const username = this.state.created_by ? this.state.users.find(user => user.id === this.state.created_by).username : ''
        return (
            <main>
                <header id="exchange-header">
                    <h2 id="exchange-title">{this.state.title}</h2>
                    <h5>Created by {username} on {moment(this.state.date_created).format('l')}</h5>
                </header>
                {songs}
                {AddSong}
            </main>
        )
    }
}