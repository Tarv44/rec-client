import {Component} from 'react';
import ValidationError from '../ValidationError';
import { users } from '../dummy-store';
import { NavLink } from 'react-router-dom';
import RotationContext from '../RotationContext';
import './Signup.css';

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: {
                value: '',
                touched: false
            },
            email: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            confirmPassword: {
                value: '',
                touched: false
            }
        }
    }

    static contextType = RotationContext

    updateUsername(username) {
        this.setState({
            username: {
                value: username,
                touched: true
            }
        })
    }

    updateEmail(email) {
        this.setState({
            email: {
                value: email,
                touched: true
            }
        })
    }

    updatePassword(password) {
        this.setState({
            password: {
                value: password,
                touched: true
            }
        })
    }

    updateConfirmPassword(confirmPassword) {
        this.setState({
            confirmPassword: {
                value: confirmPassword,
                touched: true
            }
        })
    }

    validateUsername() {
        const username = this.state.username.value.trim();
        const existingUsernames = users.map(user => {return user.username.toUpperCase()})
        if (username.length === 0) {
          return 'Username is required';
        } else if (username.length < 3) {
          return 'Username must be at least 3 characters long';
        } else if (existingUsernames.indexOf(username.toUpperCase()) !== -1) {
            return 'Username already exists'
        }
    }

    validateEmail() {
        const email = this.state.email.value.trim();
        const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        if(!pattern.test(email)) {
            return 'Invalid Email'
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
          return 'Password is required';
        } else if (password.length < 6 || password.length > 72) {
          return 'Password must be between 6 and 72 characters long';
        } else if (!password.match(/[0-9]/)) {
          return 'Password must contain at least one number';
        }
    }

    validateConfirmPassword() {
        const password = this.state.password.value.trim()
        const confirmPassword = this.state.confirmPassword.value.trim()

        if (password !== confirmPassword) {
            return 'Passwords do not match.'
        }
    }

    handleSignupSubmit(e) {
        e.preventDefault()

        //This function will eventually update database. For now, it just updates App state.

        this.context.updateUser(this.state.username.value)
        this.setState({
            username: {
                value: '',
                touched: false
            },
            email: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            confirmPassword: {
                value: '',
                touched: false
            }
        })
        this.props.history.push('/')
    }

    render () {
        return (
            <form className='signup-form' onSubmit={e => this.handleSignupSubmit(e)}>
                <h2>Signup</h2>
                <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' name='username' id='username' onChange={e => this.updateUsername(e.target.value)}/>
                    {this.state.username.touched && <ValidationError message={this.validateUsername()}/>}
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' name='email' id='email' onChange={e => this.updateEmail(e.target.value)}/>
                    {this.state.email.touched && <ValidationError message={this.validateEmail()}/>}
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' id='password' onChange={e => this.updatePassword(e.target.value)}/>
                    {this.state.password.touched && <ValidationError message={this.validatePassword()}/>}
                </div>
                <div className='form-group'>
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input type='password' name='confirmPassword' id='confirmPassword' onChange={e => this.updateConfirmPassword(e.target.value)}/>
                    {this.state.confirmPassword.touched && <ValidationError message={this.validateConfirmPassword()}/>}
                </div>
                <button type='submit'>Signup</button>
                <NavLink to={'/login'}>Already have an account? Login here.</NavLink>
            </form>
        )
    }
}