import { Component } from 'react'
import ValidationError from '../ValidationError'
import RotationContext from '../RotationContext'
import {NavLink} from 'react-router-dom'
import config from '../config'
import './Login.css'

export default class Login extends Component {
    static contextType = RotationContext

    constructor(props) {
        super(props)
        this.state = {
            error: {
                message: '',
                failed: false
            },
            email: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            }
        }
    }

    updateEmail(email) {
        this.setState({ email: { value: email, touched: true } })
    }

    updatePassword(password) {
        this.setState({ password: { value: password, touched: true } })
    }

    validateEmail() {
        const email = this.state.email.value.trim()
        if (email.length === 0) {
            return 'Email is required'
        } 
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        if (password.length === 0) {
            return 'Password is required'
        } 
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        const email = this.state.email.value.trim()
        const password = this.state.password.value.trim()

        const login = { email, password }

        const headers = {
            'content-type': 'application/json'
        }

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(login),
        }

        fetch(`${config.API_ENDPOINT}/users/login`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(user => {
                this.context.updateUser(user.username, user.id)
                this.setState({
                    error: {
                        message: '',
                        failed: false
                    },
                    email: {
                        value: '',
                        touched: false
                    },
                    password: {
                        value: '',
                        touched: false
                    }
                })
                if (this.context.return_path) {
                    this.props.history.push(this.context.return_path)
                    this.context.resetReturnPath()
                } else {
                    this.props.history.push('/dashboard')
                } 
            })
            .catch(err => {
                this.setState({
                    error: {
                        message: err.error.message,
                        failed: true
                    }
                })
            })
    }

    render() {
        return (
            <main className="signup-login">
                <form autoComplete='off' className='login-form' onSubmit={e => this.handleLoginSubmit(e)}>
                    <h2>Login</h2>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' onChange={e => this.updateEmail(e.target.value)}/>
                        {this.state.email.touched && <ValidationError message={this.validateEmail()}/>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' onChange={e => this.updatePassword(e.target.value)}/>
                        {this.state.password.touched && <ValidationError message={this.validatePassword()}/>}
                    </div>
                    <button type='submit'>Login</button>
                    {this.state.error.failed && <p className='error'>{this.state.error.message}</p>}
                    <p>Don't have an account?</p>
                    <NavLink className="login-here" to={'/signup'}>Signup here.</NavLink>
                </form>
            </main>
        )
    }
}