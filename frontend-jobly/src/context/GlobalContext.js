import {createContext, useState} from "react";
import useLocalStorageState from "../hooks/state/useLocalStorageState";
import JoblyApi from "../JoblyApi";

const _default = {user:null,setUser:(e)=>e,token:null,setToken:e=>e}
const GlobalContext = createContext({})
export default GlobalContext
export const GlobalContextProvider = ({children}) => {
    const [isAdmin,setIsAdmin]=useState(false)
    const [user,setUser]=useLocalStorageState('user','')
    const [token,_setToken]=useLocalStorageState('token','')
    const setToken = (token)=>{
        JoblyApi.token=token
        _setToken(token)
    }
    return <GlobalContext.Provider value={{
        user,setUser,
        token,setToken,
        isAdmin,setIsAdmin
    }}>
        {children}
    </GlobalContext.Provider>
}

