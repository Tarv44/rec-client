import { Component } from 'react';
import RotationContext from '../RotationContext';
import RecentEx from '../RecentEx/RecentEx';
import AllEx from '../AllEx/AllEx'
import './Dashboard.css';

export default class Dashboard extends Component {
    static contextType = RotationContext
    
    render() {
        return (
            <main>
                <header>
                    <h1>{this.context.user.username}</h1>
                </header>

                <RecentEx exchanges={this.context.exchanges}/>

                <AllEx exchanges={this.context.exchanges}/>
            </main>
        )
    }
}