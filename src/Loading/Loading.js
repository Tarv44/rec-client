import { Component } from 'react'
import logo from '../img/logo.png';
import './Loading.css'

export default class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading_msg: 'Queing the tracks'
        }
    }

    componentDidMount() {
        let i = 1

        const messages = [
            'Queing the tracks',
            'Digging through the crates',
            'Dusting off the record',
            'Setting the needle'
        ]

        setInterval(() => {
            this.setState({ loading_msg: messages[i] })
            if (i === messages.length - 1) {
                i = 0
            } else {
                i++
            }
        }, 3000)
    }

    render() {
        return (
            <main id='loading-screen'>
                <img id='loading-logo' src={logo}/>
                <h3 id='loading-message'>{this.state.loading_msg}...</h3>
            </main>
        )
    }
}