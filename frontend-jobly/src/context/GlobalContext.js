import {createContext, useState} from "react";
import useLocalStorageState from "../hooks/state/useLocalStorageState";
import JoblyApi from "../JoblyApi";
import decode from "jwt-decode";

const _default = {user: null, setUser: (e) => e, token: null, setToken: e => e}
const GlobalContext = createContext({})
export default GlobalContext
export const GlobalContextProvider = ({children}) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [user, setUser] = useLocalStorageState('user', '')
    const [token, _setToken] = useLocalStorageState('token', '')
    const setToken = (token) => {
        if (!token) return _setToken('')
        const {username, isAdmin} = decode(token)
        JoblyApi.token = token
        setUser(username)
        setIsAdmin(isAdmin)
        _setToken(token)
    }
    const clear = ()=>{
        setIsAdmin(false)
        setUser('')
        _setToken('')
    }
    return <GlobalContext.Provider value={{
        user,
        token,
        setToken,
        isAdmin,
        clear
    }}>
        {children}
    </GlobalContext.Provider>
}

