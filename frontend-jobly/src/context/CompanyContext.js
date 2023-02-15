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

    }, [prePopulate])


    return <>
        <CompanyContext.Provider value={{setCompanies, companies}}>
            {children}
        </CompanyContext.Provider>
    </>
}
export const useCompanyContext = () => useContext(CompanyContext)
