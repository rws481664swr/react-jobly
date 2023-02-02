import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import GlobalContext from "../../../context/GlobalContext";

const Navbar = ({...props}) => {
    const navigate=useNavigate()
    const {token,setToken,setUser} = useContext(GlobalContext)
    return <nav className="    navbar navbar-expand-md navbar-light ">
        <NavLink className="navbar-brand  ms-1" to="/">Jobly</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {token ?
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/companies">Companies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>{
                                setToken('')
                                setUser('')
                                navigate('/login')
                            }} className="nav-link" href="">Log Out</a>
                        </li>
                    </>
                    :
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                        </li>
                    </>
                }
            </ul>

        </div>
    </nav>
}
export default Navbar