import './Companies.css'
import {useEffect, useState} from "react";
import JoblyApi from "../../../JoblyApi";

const useAxiosGet = (func, args) => {
    const [state, setState] = useState(null)
    useEffect(() => {
        (async () => {
            const data = await func(args)
            setState(data)
        })()
    }, [args])
    return state
}

const Company = ({company: {handle, numEmployees, description, logoUrl, name}}) =>
    <div>{name}</div>
const CompanyList = ({companies}) =>
    <>
        {companies && companies.map(company => <Company key={company.handle} company={company}/>)}
    </>

const Companies = () => {
    const [filters, setFilters] = useState({})
    const companies = useAxiosGet(JoblyApi.getCompanies, filters)
    return <div>
        <CompanyList companies={companies}/>
    </div>
}
export default Companies