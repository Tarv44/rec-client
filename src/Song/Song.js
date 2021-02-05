import { Component } from 'react';
import './Song.css';

export default function Song(props) {
        const song = props.song
        const albumElement = song.album ? <h5>Album: {song.album}</h5> : null
        const comments = song.comments
            ? song.comments.map((comm, i) => {
                const username  = props.users.find(user => user.id === comm.created_by).username
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