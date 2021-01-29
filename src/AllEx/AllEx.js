import { NavLink } from 'react-router-dom';
import './AllEx.css'

export default function AllEx(props) {
    const exLis = props.exchanges.map(ex => {
        return (
            <li key={ex.id}>
                <NavLink to={`/exchange/${ex.id}`}>
                    {ex.title} <span className='date-created'>{ex.date_created.toLocaleDateString()}</span>
                </NavLink>
            </li>
        ) 
    })

    const exDisplay = props.exchanges.length > 0 ? <ul>{exLis}</ul> : <h5>No exchanges to display.</h5>
    return (
        <section className='all-exchanges'>
            <h2>All Exchanges</h2>
            {exDisplay}
        </section>
    )
}