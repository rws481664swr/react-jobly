import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import GlobalContext from "../../../context/GlobalContext";
import {
    Navbar,
    NavItem,
    Nav,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import useToggle from '../../../hooks/state/useToggle'
import useClassList from "../../../hooks/state/useClassList";

const NavBar = ({}) => {
    const navigate = useNavigate()
    const {
        setToken, setUser, token, isAdmin
    } = useContext(GlobalContext)
    const onLogout = () => {
        setToken(null)
        setUser('')
        navigate('/login')
    }
    return <>
        <nav className="navbar justify-content-end  navbar-light navbar-expand-md  ">
            <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={'collapse navbar-collapse'} id="navbarNav">


                <ul className={'navbar-nav'}>
                    {token && <LoggedInNav onLogout={onLogout} isAdmin={isAdmin}/>}
                    {!token && <LoggedOutNav/>}
                </ul>
            </div>
        </nav>
    </>

}
export default NavBar


const LoggedInNav = ({isAdmin, onLogout}) => <>
    <li className="nav-item">
        <NavLink className="nav-link" to="/companies">Companies</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
    </li>
    {isAdmin &&
        <li className="nav-item">
            <NavLink className="nav-link" to="/admin">Admin</NavLink>
        </li>
    }
    <li className="nav-item">
        <NavLink
            to={'/login'}
            onClick={onLogout} className="nav-link" href="">Log Out</NavLink>
    </li>
</>
const LoggedOutNav = () => <>
    <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
    </li>
</>