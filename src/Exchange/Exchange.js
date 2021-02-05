import { Component } from 'react';
import Song from '../Song/Song';
import RotationContext from '../RotationContext';
import config from '../config';
import moment from 'moment';
import './Exchange.css';

export default class Exchange extends Component {
    static contextType = RotationContext

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.exId,
            title: '',
            date_created: '',
            created_by: '',
            songs: []
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }

        fetch(`${config.API_ENDPOINT}/exchanges/${this.state.id}`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(exchange => {
                const { id, title, date_created, created_by, songs } = exchange
                this.setState({
                    id,
                    title,
                    date_created,
                    created_by,
                    songs
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const songs = this.state.songs.map((song, i) => {
            return <Song song={song} key={i}/>
        })

        const username = this.state.created_by ? this.context.users.find(user => user.id == this.state.created_by).username : ''
        return (
            <main>
                <header>
                    <h2>{this.state.title}</h2>
                    <h5>Created by {username} on {moment(this.state.date_created).format('l')}</h5>
                </header>
                {songs}
            </main>
        )
    }
}