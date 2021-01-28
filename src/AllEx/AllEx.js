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
    return (
        <section>
            <h2>All Exchanges</h2>
            <ul>
                {exLis}
            </ul>
        </section>
    )
}