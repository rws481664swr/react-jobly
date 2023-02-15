import './JobListItem.css'
import Card from "../../../../common/Card";
import JobCardBody from "./JobCardBody";
import JobCardTitle from "./JobCardTitle";

const JobListItem = ({applied,apply=()=>{},className = '', job,companyName=''}) => {

    return <Card className={`${className}`}>
        <JobCardTitle
            companyName={companyName}
            apply={apply}
            applied={applied}
            {...job}
        />
        <JobCardBody {...job}/>
    </Card>
}
export default JobListItem
