import { Component } from 'react';
import RotationContext from '../RotationContext';
import AddComment from '../AddComment/AddComment';
import './Song.css';

export default class Song extends Component {
    static contextType = RotationContext
    render() {
        const song = this.props.song
        const albumElement = song.album ? <h5>Album: {song.album}</h5> : null
        const comments = song.comments
            ? song.comments.map((comm, i) => {
                const username  = this.props.users.find(user => user.id === comm.created_by).username
                return <p key={i}>{username}: {comm.message}</p>
            })
            : null

        const newComment = this.context.current_user.username 
            ? <AddComment 
                handleComment={this.props.handleComment} 
                handleCommentSubmit={this.props.handleCommentSubmit} 
                songIdx={this.props.index}
            />
            : <p>Log in to leave a comment</p>
        return (
            <section>
                <h3>"{song.title}"</h3>
                <h5>Artist: {song.artist}</h5>
                {albumElement}
                {comments}
                {newComment}
            </section>
        )
    }
}