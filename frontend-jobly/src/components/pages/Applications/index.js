import useGlobalContext from "../../../hooks/state/useGlobalContext";
import JoblyApi from "../../../JoblyApi";
import {ListWrapper} from "../../util/HelperDivs";
import AsyncJobListItem from "./AsyncJobListItem";
import useAxiosGet from "../../../hooks/ajax/useAxiosGet";

const Applications = () => {
    const {user: username} = useGlobalContext()
    const [user] = useAxiosGet(JoblyApi.getUser, username)
    
    if(!user)return <></>

    const {jobs}=user
    return <>
        <ListWrapper>
            {jobs && jobs.map(id => <AsyncJobListItem key={id} id={id}/>)}
        </ListWrapper>
    </>
}
export default Applications