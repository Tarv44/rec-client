import { NavLink } from 'react-router-dom'

export default function RecentEx(props) {
    const recentEx = props.exchanges.sort((a,b) => {
        return a.date_created - b.date_created
    }).slice(0,3)

    const recentLis = recentEx.map(ex => {
        return <li key={ex.id}><NavLink to={`/exchange/${ex.id}`}>{ex.title}</NavLink></li>
    })

    return (
        <section>
            <NavLink to={'/add-exchange'}><button>Create New Exchange</button></NavLink>
            <h2>Recent Exchanges</h2>
            <ul>
                {recentLis}
            </ul>
        </section>
    )
}