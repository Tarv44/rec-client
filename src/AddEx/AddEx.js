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
                    message: ''
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

    updateComment = (message, index) => {
        const newSongs = this.state.newSongs
        newSongs[index].message = message
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
                    message: '' 
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
                this.context.updateExchanges()
                this.props.history.push(`/exchange/${ex.id}`)
            })
            .catch(err => console.log(err))
        
        
    }

    render() {
        const newSongs = this.state.newSongs.map((song, i) => {
            return (
                <fieldset className="add-ex-song">
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
                <form autoComplete="off" className='exchange-form' onSubmit={e => this.handleSubmit(e)}>
                    <h2>New Exchange</h2>
                    <div className='exchange-form-group'>
                        <label htmlFor='add-ex-title'>Title</label>
                        <input type='text' name='title' id='add-ex-title' onChange={e => this.updateTitle(e.target.value)}/>
                    </div>
                    <div className='exchange-form-group'>
                        <label htmlFor='descr'>Description</label>
                        <textarea name='descr' id='descr' onChange={e => this.updateDescr(e.target.value)}/>   
                    </div>
                    {newSongs}
                    <button id='add-ex-add-song-btn' onClick={e => this.addSong(e)}>Add Another Song</button>
                    <button id='create-ex-btn' type='submit'>Create Exchange</button>
                </form>
            </main>
        )
    }
}