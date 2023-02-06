import './JobList.css'
import JobListItem from "./JobListItem";
import {ListWrapper} from "../../../util/HelperDivs";

const JobList = ({jobs, className = ''}) =>
    <ListWrapper>
        {jobs && jobs.map(
            (j) => <JobListItem className={``} key={j.id} job={j}/>)}
    </ListWrapper>
        export default JobList
