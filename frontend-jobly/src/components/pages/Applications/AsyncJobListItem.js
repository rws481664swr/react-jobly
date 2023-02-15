import useAxiosGet from "../../../hooks/ajax/useAxiosGet";
import JoblyApi from "../../../JoblyApi";
import JobListItem from "../Jobs/JobList/JobListItem";

const AsyncJobListItem = ({id,companies}) => {
    const [job] = useAxiosGet(JoblyApi.getJob, id)
    if (!job) return <></>

    return <JobListItem companyName={companies[job.companyHandle]} applied={true} job={job} className={''}/>

}
export default AsyncJobListItem