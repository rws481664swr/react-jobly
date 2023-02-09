import useGlobalContext from "../../../hooks/state/useGlobalContext";
import useGetByID from "../../../hooks/ajax/useGetByID";
import JoblyApi from "../../../JoblyApi";
import {ListWrapper} from "../../util/HelperDivs";
import JobListItem from "../Jobs/JobList/JobListItem";

const Applications = () => {
    const {user: username} = useGlobalContext()
    const {jobs} = useGetByID(JoblyApi.getUser, username, {jobs: []})

    return <>
        <ListWrapper>
            {jobs.map(id => <AsyncJobListItem id={id}/>)}
        </ListWrapper>
    </>
}
const AsyncJobListItem = ({id}) => {
    const job = useGetByID(JoblyApi.getJob, id)
    if (!job) return <></>
    return <JobListItem applied={true} job={job} className={''}/>

}
export default Applications