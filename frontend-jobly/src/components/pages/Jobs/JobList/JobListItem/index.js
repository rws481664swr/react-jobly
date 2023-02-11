import './JobListItem.css'
import Card from "../../../../common/Card";
import JobCardBody from "./JobCardBody";
import JobCardTitle from "./JobCardTitle";
import useGetCompanyName from "../../../../../hooks/state/useGetCompanyName";

const JobListItem = ({applied,apply=()=>{},className = '', job}) => {
    const companyName = useGetCompanyName(job.companyHandle)
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
