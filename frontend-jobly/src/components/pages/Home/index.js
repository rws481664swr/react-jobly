import './Home.css'
import useGlobalContext from "../../../hooks/state/useGlobalContext";
import {Link} from "react-router-dom";


const Home = ({...props}) => {
    const {user: loggedIn} = useGlobalContext()
    return <>
        <CenterMessage>
            <p id={'CenterMessage_content'}>
                {loggedIn && 'Welcome back!'}
                {!loggedIn &&
                    <>
                        Welcome to Jobly, Please <Link to={'/login'}>log in</Link> or &nbsp;
                        <Link to={'/register'}>register</Link>
                    </>
                }
            </p>
        </CenterMessage>

    </>
}
export default Home




const CenterMessage = ({children}) =>
    <div id={'CenterMessage'}>
        {children}
    </div>