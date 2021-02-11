import { Component } from 'react';
import NewSong from '../NewSong/NewSong';
import RotationContext from '../RotationContext';
import config from '../config';
import './AddEx.css';

export default class AddEx extends Component {
    static contextType = RotationContext

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            newSongs: [
                {
                    title: '',
                    artist: '',
                    album: '',
                    url_link: '',
                    comment: ''
                }
            ]
        }
    }

    updateTitle(title) {
        this.setState( { title } )
    }

    updateDescr(description) {
        this.setState( { description } )
    }

    updateSongTitle = (title, index) => {
        const newSongs = this.state.newSongs
        newSongs[index].title = title
        this.setState({ newSongs })
    }

    updateArtist = (artist, index) => {
        const newSongs = this.state.newSongs
        newSongs[index].artist = artist
        this.setState( {newSongs} )
    }

    updateAlbum = (album, index) => {
        const newSongs = this.state.newSongs
        newSongs[index].album = album
        this.setState( { newSongs } )
    }

    updateComment = (comment, index) => {
        const newSongs = this.state.newSongs
        newSongs[index].comment = comment
        this.setState( { newSongs } )
    }

    updateLink = (link, index) => {
        const newSongs = this.state.newSongs
        newSongs[index].link = link
        this.setState( { newSongs } )
    }

    addSong(e) {
        e.preventDefault()
        this.setState({
            newSongs: [
                ...this.state.newSongs,
                {
                    title: '',
                    artist: '',
                    album: '',
                    url_link: '',
                    comment: '' 
                }
            ]
        })
    }

    // deleteSong = (e, index) => {
    //     e.preventDefault()
    //     const newSongs = this.state.newSongs
    //     newSongs.splice(index, 1)
    //     console.log(newSongs)
    //     this.setState( { newSongs } )
    // }

    handleSubmit(e) {
        e.preventDefault()
        console.log('submitted')
        const exchange = {
            title: this.state.title,
            created_by: this.context.current_user.id,
            description: this.state.description,
            songs: this.state.newSongs
        }

        const options = {
            'method': 'POST',
            'headers': {
                'content-type': 'application/json',
            },
            'body': JSON.stringify(exchange)
        }

        fetch(`${config.API_ENDPOINT}/exchanges/`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(ex => {
                this.context.addExchange(ex)
                this.props.history.push(`/exchange/${ex.id}`)
            })
            .catch(err => console.log(err))
        
        
    }

    render() {
        const newSongs = this.state.newSongs.map((song, i) => {
            return (
                <fieldset>
                    <legend>Song</legend>
                    <NewSong 
                        key={i}
                        index={i} 
                        newSong={song}
                        handleTitle={this.updateSongTitle}
                        handleArtist={this.updateArtist}
                        handleAlbum={this.updateAlbum}
                        handleLink={this.updateLink}
                    />
                    <div className='exchange-form-group'>
                        <label htmlFor={`comment-${i}`}>Thoughts</label>
                        <textarea
                            className='comment' 
                            name='song-title' 
                            id={`comment-${i}`}
                            onChange={e => this.updateComment(e.target.value, i)}
                        />
                    </div>
                </fieldset>
            )
        })
        return (
            <main>
                <form className='exchange-form' onSubmit={e => this.handleSubmit(e)}>
                    <h2>New Exchange</h2>
                    <div className='exchange-form-group'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' id='title' onChange={e => this.updateTitle(e.target.value)}/>
                    </div>
                    <div className='exchange-form-group'>
                        <label htmlFor='descr'>Description</label>
                        <textarea name='descr' id='descr'placeholder='Describe the topic...' onChange={e => this.updateDescr(e.target.value)}/>   
                    </div>
                    {newSongs}
                    <button id='add-song-btn' onClick={e => this.addSong(e)}>Add Another Song</button>
                    <button type='submit'>Create Exchange</button>
                </form>
            </main>
        )
    }
}