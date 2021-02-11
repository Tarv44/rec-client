import { Component } from "react";
import './AddComment.css';

export default class AddComment extends Component {
    render() {
        return (
            <form className='song-form' onSubmit={e => this.props.handleCommentSubmit(e, this.props.songIdx)}>
                <input 
                    type='text'
                    name='comment'
                    className='comment-input'
                    onChange={e => this.props.handleComment(e.target.value, this.props.songIdx)}
                />
                <button className='comment-button' type='submit'>Comment</button>
            </form>
        )
    }
}