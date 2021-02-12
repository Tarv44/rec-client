import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RotationContext from '../RotationContext';
import RecentEx from '../RecentEx/RecentEx';
import AllEx from '../AllEx/AllEx'
import './Dashboard.css';

export default class Dashboard extends Component {
    static contextType = RotationContext
    
    render() {
        return (
            <main className='dashboard'>
                <header className='dashboard-header'>
                    <h1 className='dashboard-title'>{this.context.current_user.username}</h1>
                    <NavLink to={'/add-exchange'}><button>Create New Exchange</button></NavLink>
                </header>

                <RecentEx exchanges={this.context.current_exchanges}/>

                <AllEx exchanges={this.context.current_exchanges}/>
            </main>
        )
    }
}