import { Component } from 'react';
import './NewSong.css'

export default class NewSong extends Component {
    render() {
        return (
            <>
                <div className='exchange-form-group'>
                    <label htmlFor={`new-song-title-${this.props.index}`}>Title</label>
                    <input 
                        type='text' 
                        name='song-title' 
                        id={`new-song-title-${this.props.index}`}
                        value={this.props.form_state.title}
                        onChange={e => this.props.handleTitle(e.target.value, this.props.index)}
                    />
                </div>
                <div className='exchange-form-group'>
                    <label htmlFor={`new-song-link-${this.props.index}`}>Link</label>
                    <input 
                        type='text' 
                        name='song-link' 
                        id={`new-song-link-${this.props.index}`}
                        value={this.props.form_state.url_link}
                        onChange={e => this.props.handleLink(e.target.value, this.props.index)}
                    />
                </div>
                <div className='exchange-form-group'>
                    <label htmlFor={`new-artist-${this.props.index}`}>Artist</label>
                    <input 
                        type='text' 
                        name='artist' 
                        id={`new-artist-${this.props.index}`}
                        value={this.props.form_state.artist}
                        onChange={e => this.props.handleArtist(e.target.value, this.props.index)}
                    />
                </div>
                <div className='exchange-form-group'>
                    <label htmlFor={`new-album-${this.props.index}`}>Album</label>
                    <input 
                        type='text' 
                        name='album' 
                        id={`new-album-${this.props.index}`}
                        value={this.props.form_state.album}
                        onChange={e => this.props.handleAlbum(e.target.value, this.props.index)}
                    />
                </div>
            </>
        )
    }
}