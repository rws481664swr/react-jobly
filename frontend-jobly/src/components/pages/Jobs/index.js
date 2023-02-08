import './Jobs.css'
import useAxiosGet from "../../../hooks/ajax/useAxiosGet";
import JoblyApi from "../../../JoblyApi";
import JobList from "./JobList";
import JobFilters from "../../filters/JobFilters";


const Jobs = () => {
    const [jobs, setQuery] = useAxiosGet(JoblyApi.getJobs)

    return <>
        <JobFilters setQuery={setQuery}/>
            <JobList jobs={jobs}/>
    </>

}
export default Jobs