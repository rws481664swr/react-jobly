import {createContext, useContext, useEffect, useState} from "react";
import JoblyApi from "../JoblyApi";


const CompanyContext = createContext({})
export const CompanyContextProvider = ({prePopulate, children}) => {
    const [companies, setCompanies] = useState({})


    //initial population of companies
    useEffect(() => {
        (async () => {
            if (!prePopulate) return
            const allCompanies = await JoblyApi.getCompanies()
            setCompanies(
                allCompanies
                    .map(({name, handle}) => ({[handle]: name}))
                    .reduce((e, r) => ({...e, ...r})))
        })()

    }, [])


    return <>
        <CompanyContext.Provider value={{setCompanies, companies}}>
            {children}
        </CompanyContext.Provider>
    </>
}
export const useCompanyContext = () => useContext(CompanyContext)
/*

const CompanyContext = createContext({})
export const CompanyContextProvider = ({children}) => {
    const [state,updateCompanies]= useToggle()
    const [companies, setState] = useState({})
    const setCompanies = (companiesList) =>
        setState(
            companiesList
                .map(({name, handle}) => ({[handle]: name}))
                .reduce((e, r) => ({...e, ...r})))
    useEffect(() => {
        (async () => {
            const companies = await JoblyApi.getCompanies()
            setState(companies)
        })()
    }, [state])
    return <CompanyContext.Provider value={{companies, setCompanies,updateCompanies}}>
        {children}
    </CompanyContext.Provider>
}

export const useCompanyContext = () => useContext(CompanyContext)

export default CompanyContext
*/
