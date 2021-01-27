import { NavLink } from 'react-router-dom';
import './Nav.css'

export default function Nav(props) {
    const links = Boolean(props.username) 
        ? <div className='nav-links'>
            <NavLink to={'/dashboard'}>{props.username}</NavLink>
            {/* <NavLink to={'/new-exchange'}>Create Exchange</NavLink> */}
        </div>
        : <div className='nav-links'>
            <NavLink to={'/signup'}>Signup</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    return (
        <nav>
            <NavLink to={'/'} className="nav-logo">Rotation</NavLink>
            {links}
        </nav>
    )
}