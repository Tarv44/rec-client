import { Component } from 'react';
import RotationContext from '../RotationContext';
import RecentEx from '../RecentEx/RecentEx';
import AllEx from '../AllEx/AllEx'
import './Dashboard.css';

export default class Dashboard extends Component {
    static contextType = RotationContext
    
    render() {
        return (
            <main className='dashboard'>
                <header>
                    <h1>{this.context.current_user.username}</h1>
                </header>

                <RecentEx exchanges={this.context.current_exchanges}/>

                <AllEx exchanges={this.context.current_exchanges}/>
            </main>
        )
    }
}