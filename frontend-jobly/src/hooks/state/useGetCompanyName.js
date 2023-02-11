import {useEffect, useState} from "react";
import JoblyApi from "../../JoblyApi";
import {useCompanyContext} from "../../context/CompanyContext";


const useGetCompanyName = (handle) => {
    const {companies, setCompanies} = useCompanyContext()
    const [name, setName] = useState('')

    //set state helper function
    const setCompany = (handle, name) => {
        setCompanies(companies => ({...companies, [handle]: name}))
        return name
    }

    //get or request if not present
    const getName = async (handle, companyName) => {
        if (companyName) return setCompany(handle, companyName)
        if (companies[handle]) return companies[handle]

        const {name} = await JoblyApi.getCompany(handle)
        return setCompany(handle, name)
    }
    useEffect(() => {
        (async () => {
            setName(await getName(handle))
        })()
    }, [])
    return name
}

export default useGetCompanyName