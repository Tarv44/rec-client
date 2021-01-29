import { Component } from 'react';
import Song from '../Song/Song';
import RotationContext from '../RotationContext';
import './Exchange.css';

export default class Exchange extends Component {
    static contextType = RotationContext

    constructor(props) {
        super(props)
        this.state = {
            id: Number(this.props.match.params.exId),
            title: '',
            date_created: '',
            created_by: '',
            songs: []
        }
    }

    componentDidMount() {
        const store = this.context
        const exchange = store.exchanges.find(ex => ex.id === this.state.id)
        const created_by = store.users.find(user => user.id === exchange.created_by).username
        const songs = store.songs.filter(song => song.exchange_id === this.state.id)
            .map(song => {
                const songComments = store.comments.filter(comment => comment.song_id === song.id)
                    .map(comm => {
                        return {
                            ...comm,
                            created_by: store.users.find(user => user.id === comm.created_by).username
                        }
                    })
                song.comments = songComments
                return song
            })
        this.setState({
            title: exchange.title,
            date_created: exchange.date_created.toLocaleDateString(),
            created_by,
            songs
        })
    }

    render() {
        const songs = this.state.songs.map((song, i) => {
            return <Song song={song} key={i}/>
        })
        return (
            <main>
                <header>
                    <h2>{this.state.title}</h2>
                    <h5>Created by {this.state.created_by} on {this.state.date_created}</h5>
                </header>
                {songs}
            </main>
        )
    }
}