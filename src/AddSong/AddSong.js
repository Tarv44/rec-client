import { Component } from 'react';
import './AddSong.css'

export default class AddSong extends Component {
    render() {
        return (
            <fieldset>
                <legend>Song</legend>
                <div className='exchange-form-group'>
                    <label htmlFor={`song-title-${this.props.index}`}>Title</label>
                    <input 
                        type='text' 
                        name='song-title' 
                        id={`song-title-${this.props.index}`}
                        onChange={e => this.props.handleTitle(e.target.value, this.props.index)}
                    />
                </div>
                <div className='exchange-form-group'>
                    <label htmlFor={`artist-${this.props.index}`}>Artist</label>
                    <input 
                        type='text' 
                        name='artist' 
                        id={`artist-${this.props.index}`}
                        onChange={e => this.props.handleArtist(e.target.value, this.props.index)}
                    />
                </div>
                <div className='exchange-form-group'>
                    <label htmlFor={`album-${this.props.index}`}>Album</label>
                    <input 
                        type='text' 
                        name='album' 
                        id={`album-${this.props.index}`}
                        onChange={e => this.props.handleAlbum(e.target.value, this.props.index)}
                    />
                </div>
                <div className='exchange-form-group'>
                    <label htmlFor={`comment-${this.props.index}`}>Thoughts</label>
                    <textarea
                        className='comment' 
                        name='song-title' 
                        id={`comment-${this.props.index}`}
                        onChange={e => this.props.handleComment(e.target.value, this.props.index)}
                    />
                </div>
            </fieldset>
        )
    }
}