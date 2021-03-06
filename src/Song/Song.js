import { Component } from 'react';
import {NavLink} from 'react-router-dom'
import RotationContext from '../RotationContext';
import AddComment from '../AddComment/AddComment';
import moment from 'moment';
import './Song.css';

export default class Song extends Component {
    static contextType = RotationContext
    render() {
        const song = this.props.song
        const added_by = this.props.users.find(user => user.id === song.added_by).username
        const comments = song.comments
            ? song.comments.map((comm, i) => {
                const username  = this.props.users.find(user => user.id === comm.created_by).username
                return <p key={i}><span className='username'>{username}:</span> {comm.message}</p>
            })
            : null

        const newComment = this.context.current_user.id !== null
            ? <AddComment 
                handleComment={this.props.handleComment} 
                handleCommentSubmit={this.props.handleCommentSubmit} 
                songIdx={this.props.index}
                inputValue={this.props.song.new_comment}
            />
            : <NavLink to={'/login'}>Log in to leave a comment</NavLink>
        return (
            <div className='song-section'>
                <div className="song-header song-div">
                    <h3 className='song-title'>{song.title}</h3>
                    <h4 className='song-added'>{moment(song.date_added).format('l')} - <span className='username'>{added_by}</span></h4>
                    {song.url_link ? <a href={song.url_link} target='_blank' rel="noreferrer" className='song-link'>Track Link</a> : null}
                </div>
                
                <div className='song-details song-div'>
                    <p><b>Artist:</b> {song.artist}</p>
                    {song.album ? <p><b>Album:</b> {song.album}</p> : null}
                </div>
                
                <div className='song-comments song-div'>
                    {comments}
                    {newComment}
                </div>
                
            </div>
        )
    }
}