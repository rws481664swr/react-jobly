import {Route, Routes, Navigate} from "react-router-dom";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import Jobs from "../../pages/Jobs";
import Companies from "../../pages/Companies";
import Profile from "../../pages/Profile/index.js";
import Home from "../../Home";

const AppRoutes = () =>

    <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/companies'} element={<Companies/>}/>
        <Route path={'/jobs'} element={<Jobs/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/signup'} element={<Signup/>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>


export default AppRoutes