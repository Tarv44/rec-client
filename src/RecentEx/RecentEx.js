import { NavLink } from 'react-router-dom'

function compare(a,b) {
    const dateA = a.date_created
    const dateB = b.date_created

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
        <section>
            <NavLink to={'/add-exchange'}><button>Create New Exchange</button></NavLink>
            <h2>Recent Exchanges</h2>
            {recentDisplay}
        </section>
    )
}