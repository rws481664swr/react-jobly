import './Company.css'
import useAxiosGet from "../../../hooks/ajax/useAxiosGet";
import JoblyApi from "../../../JoblyApi";
import JobList from "../Jobs/JobList";
import CompanyItem from './CompanyItem'
import JobFilters from "../../filters/JobFilters";


const Company = ({...props}) => {
    const comp = useAxiosGet(JoblyApi.getCompany, 'handle')
    const [jobs, setQuery] = useAxiosGet(JoblyApi.getJobs)
    if (!comp) return <></>
    return <>
        <CompanyItem company={comp}/>
        <JobFilters setQuery={setQuery}/>
        <JobList jobs={jobs.filter(j=> j.companyHandle===comp.handle)}/>
    </>
}
export default Company