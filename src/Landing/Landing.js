import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Landing.css'

export default class Landing extends Component {
    render() {
        return (
            <main className='landing'>
                <header>
                    <h1 className='landing-title'>Rotation</h1>
                </header>

                <section>
                    <h2>Intro</h2>
                    <p>Introductory text that informs what the heck is going here on this site.</p>
                </section>

                <section>
                    <h2>Get Started</h2>
                    <p>Create an account or login to make a new exchange.</p>
                    <div className='account-buttons'>
                        <NavLink to={'/signup'} className='signup-button'><button>Signup</button></NavLink>
                        <NavLink to={'/login'}><button>Login</button></NavLink>
                    </div>
                </section>
            </main>
        )
    }
}