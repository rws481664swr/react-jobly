import useGlobalContext from "../../../hooks/state/useGlobalContext";
import JoblyApi from "../../../JoblyApi";
import {ListWrapper} from "../../util/HelperDivs";
import JobListItem from "../Jobs/JobList/JobListItem";
import useAxiosGet from "../../../hooks/ajax/useAxiosGet";

const Applications = () => {
    const {user: username} = useGlobalContext()
    const {jobs} = useAxiosGet(JoblyApi.getUser, username, {jobs: []})

    return <>
        <ListWrapper>
            {jobs.map(id => <AsyncJobListItem id={id}/>)}
        </ListWrapper>
    </>
}
const AsyncJobListItem = ({id}) => {
    const job = useAxiosGet(JoblyApi.getJob, id)
    if (!job) return <></>
    return <JobListItem applied={true} job={job} className={''}/>

}
export default Applications