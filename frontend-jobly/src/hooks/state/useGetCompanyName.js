import {useEffect, useState} from "react";
import JoblyApi from "../../JoblyApi";
import {useCompanyContext} from "../../context/CompanyContext";


const useGetCompanyName = (handle) => {
    const {companies, setCompanies} = useCompanyContext()
    const [name, setName] = useState('')

    //set state helper function
    // const setCompany = (handle, name) => {
    //     console.log(Object.key
    //     s.length(companies))
    //     setCompanies(companies => ({...companies, [handle]: name}))
    //     return name
    // }

    //get or request if not present
    const getName = async (handle) => {
        if (companies[handle]) {
            console.debug('memo')
            return companies[handle]
        }
        const {name} = await JoblyApi.getCompany(handle)
        setCompanies(companies => ({...companies, [handle]: name}))
        return name
    }
    useEffect(() => {
        (async () => {
            const _name=await getName(handle)
            setName(_name)
        })()
    }, [getName,handle])
    return name
}

export default useGetCompanyName