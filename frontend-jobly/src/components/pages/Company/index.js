import './Company.css'
import useAxiosGet from "../../../hooks/ajax/useAxiosGet";
import JoblyApi from "../../../JoblyApi";
import JobList from "../Jobs/JobList";
import CompanyItem from './CompanyItem'
import JobFilters from "../../filters/JobFilters";
import {useParams} from "react-router-dom";


const Company = ({...props}) => {
    const {handle}=useParams()
    const [company,setQuery] = useAxiosGet(JoblyApi.getCompany, handle)
    // const [jobs, setQuery] = useAxiosGet(JoblyApi.getCompanyJobs,undefined,[])

    if (!company) return <></>
    const{jobs}=company
    return <>
        <CompanyItem company={company}/>
        <JobFilters setQuery={setQuery}/>
        <JobList jobs={jobs}/>
    </>
}
export default Company