import {createContext, useState} from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const _default = {user:null,setUser:(e)=>e,token:null,setToken:e=>e}
const GlobalContext = createContext({})
export default GlobalContext
export const GlobalContextProvider = ({children}) => {
    const [user,setUser]=useLocalStorageState('user','')
    const [token,setToken]=useLocalStorageState('token','')
    return <GlobalContext.Provider value={{user,setUser,setToken,token}}>
        {children}
    </GlobalContext.Provider>
}

