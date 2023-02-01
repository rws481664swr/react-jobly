import {Redirect, Route, Switch} from "react-router-dom";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import Jobs from "../../pages/Jobs";
import Companies from "../../pages/Companies";
import Profile from "../../pages/Profile/index.js";
import 'bootstrap/dist/css/bootstrap.min.css'
const Routes = () =><>

    <Switch>
        <Route exact path={'/'}>

        </Route>
        <Route exact path={'/companies'}>
            <Companies/>

        </Route>
        <Route exact path={'/jobs'}>
            <Jobs/>

        </Route>
        <Route exact path={'/login'}>
            <Login/>
        </Route>
        <Route exact path={'/signup'}>
            <Signup/>
        </Route>
        <Route exact path={'/profile'}>
            <Profile/>
        </Route>
        <Redirect to={'/'}/>
    </Switch>
</>

export default Routes