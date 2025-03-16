import { Link, NavLink } from "react-router-dom"

const navActive = ({ isActive }) => {
    return `nav-link ${ 'active' ? isActive : '' }`
}


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                
                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink 
                            to='/login'
                            className={ navActive }>
                            Login
                        </NavLink>
                        <NavLink 
                            to='/about'
                            className={ navActive }>
                            About
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
