import { Component } from 'react';
import RotationContext from '../RotationContext'
import './Song.css';

export default class Song extends Component {
    static contextType = RotationContext
    render() {
        const song = this.props.song
        const albumElement = song.album ? <h5>Album: {song.album}</h5> : null
        const comments = song.comments
            ? song.comments.map((comm, i) => {
                const username  = this.context.users.find(user => user.id === comm.created_by).username
                return <p key={i}>{username}: {comm.message}</p>
            })
            : null
        return (
            <section>
                <h3>"{song.title}"</h3>
                <h5>Artist: {song.artist}</h5>
                {albumElement}
                {comments}
            </section>
        )
    }
}