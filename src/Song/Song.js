import './Song.css';

export default function Song(props) {
    const song = props.song
    const albumElement = song.album ? <h5>Album: {song.album}</h5> : null
    const comments = song.comments
        ? song.comments.map((comm, i) => { return <p key={i}>{comm.created_by}: {comm.message}</p>})
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