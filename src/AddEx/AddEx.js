import { Component } from 'react';
import AddSong from '../AddSong/AddSong';
import RotationContext from '../RotationContext';
import './AddEx.css'

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

    addSong(e) {
        e.preventDefault()
        this.setState({
            newSongs: [
                ...this.state.newSongs,
                {
                    title: '',
                    artist: '',
                    album: '',
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
        const exchangeId = this.context.exchanges.map(ex => ex.id).reduce((a,b) => Math.max(a,b)) + 1
        const exchange = {
            id: exchangeId,
            title: this.state.title,
            created_by: this.context.current_user.id,
            date_created: new Date(),
            description: this.state.description,
            newSongs: this.state.newSongs
        }
        this.context.addExchange(exchange)
        this.props.history.push(`/exchange/${exchangeId}`)
    }

    render() {
        const newSongs = this.state.newSongs.map((song, i) => {
            return (
                <AddSong 
                    key={i}
                    index={i} 
                    newSong={song}
                    handleTitle={this.updateSongTitle}
                    handleArtist={this.updateArtist}
                    handleAlbum={this.updateAlbum}
                    handleComment={this.updateComment}
                    // handleDelete={this.deleteSong}
                />
                
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