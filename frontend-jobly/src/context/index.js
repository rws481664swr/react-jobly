import {createContext, useState} from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const _default = {}
const GlobalContext = createContext(_default)
export default GlobalContext
export const GlobalContextProvider = ({children}) => {
    const [user,setUser]=useLocalStorageState('user','')
    const [token,setToken]=useLocalStorageState('token','')
    return <GlobalContext.Provider value={{user,setUser,setToken,token}}>
        {children}
    </GlobalContext.Provider>
}

