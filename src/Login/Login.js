import { Component } from 'react'
import ValidationError from '../ValidationError'
import { users } from '../dummy-store'
import RotationContext from '../RotationContext'
import './Login.css'

export default class Login extends Component {
    static contextType = RotationContext

    constructor(props) {
        super(props)
        this.state = {
            loginFail: {
                message: '',
                failed: false
            },
            username: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            }
        }
    }

    updateUsername(username) {
        this.setState({ username: { value: username, touched: true } })
    }

    updatePassword(password) {
        this.setState({ password: { value: password, touched: true } })
    }

    validateUsername() {
        const username = this.state.username.value.trim()
        if (username.length === 0) {
            return 'Username is required'
        } 
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        if (password.length === 0) {
            return 'Username is required'
        } 
    }

    handleLoginSubmit(e) {
        e.preventDefault()
        const username = this.state.username.value.trim().toLowerCase()
        const password = this.state.password.value.trim()
        //This function will eventually make a GET request to database to verify account.
        //For now, it verifies account in dummy store and responds accordingly
        const userIdx = users.findIndex(user => user.username.toLowerCase() == username)
        if (userIdx === -1) {
            this.setState({
                loginFail: {
                    failed: true,
                    message: 'Username not found.'
                }
            })
        } else {
            if (password !== users[userIdx].password) {
                this.setState({
                    loginFail: {
                        message: 'Incorrect password.',
                        failed: true
                    }
                })
            } else {
                this.context.updateUser(this.state.username.value)
                this.setState({
                    loginFail: {
                        message: '',
                        failed: false
                    },
                    username: {
                        value: '',
                        touched: false
                    },
                    password: {
                        value: '',
                        touched: false
                    }
                })
                this.props.history.push('/')
            }
        }
    }

    render() {
        return (
            <form onSubmit={e => this.handleLoginSubmit(e)}>
                <h2>Login</h2>
                {this.state.loginFail && <p>{this.state.loginFail.message}</p>}
                <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' name='username' id='username' onChange={e => this.updateUsername(e.target.value)}/>
                    {this.state.username.touched && <ValidationError message={this.validateUsername()}/>}
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' id='password' onChange={e => this.updatePassword(e.target.value)}/>
                    {this.state.password.touched && <ValidationError message={this.validatePassword()}/>}
                </div>
                <button type='submit'>Login</button>
            </form>
        )
    }
}