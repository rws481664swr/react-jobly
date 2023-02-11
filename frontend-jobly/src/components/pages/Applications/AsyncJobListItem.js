import useAxiosGet from "../../../hooks/ajax/useAxiosGet";
import JoblyApi from "../../../JoblyApi";
import JobListItem from "../Jobs/JobList/JobListItem";

const AsyncJobListItem = ({id}) => {
    const [job] = useAxiosGet(JoblyApi.getJob, id)
    console.log(job)
    if (!job) return <></>
    return <JobListItem applied={true} job={job} className={''}/>

}
export default AsyncJobListItem