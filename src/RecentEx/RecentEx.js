import { NavLink } from 'react-router-dom'
import './RecentEx.css'

function compare(a,b) {
    const dateA = a.modified
    const dateB = b.modified

    if (dateB > dateA) {
        return 1
    } else if (dateB < dateA) {
        return -1
    }
}

export default function RecentEx(props) {
    const recentEx = props.exchanges.sort(compare).slice(0,3)

    const recentLis = recentEx.map(ex => {
        return <li key={ex.id}><NavLink to={`/exchange/${ex.id}`}>{ex.title}</NavLink></li>
    })

    const recentDisplay = props.exchanges.length > 0 ? <ul>{recentLis}</ul> : <h5>No recent exchanges.</h5>

    return (
        <section className='dashboard-section recent'>
            <h2>Recently Updated</h2>
            {recentDisplay}
        </section>
    )
}