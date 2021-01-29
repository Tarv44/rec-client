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
                    <h2>Welcome!</h2>
                    <p>
                        Whether you're a musician, a history buff, or just an excited fan, it's a pleasure to share the
                        music you care about with those around you. These days, "those around you" is likely just your 
                        roommate or dog. 
                    </p>
                    <p>
                        Rotation was created as a tool to help with deeper music conversation between acquaintances far and wide, 
                        that goes beyond the basic link to a streaming platform.
                    </p>
                </section>

                <section>
                    <h2>Get Started</h2>
                    <p>Create an account or login to start a new exchange.</p>
                    <div className='account-buttons'>
                        <NavLink to={'/signup'} className='signup-button'><button>Signup</button></NavLink>
                        <NavLink to={'/login'}><button>Login</button></NavLink>
                    </div>
                </section>
            </main>
        )
    }
}