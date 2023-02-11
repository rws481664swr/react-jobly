import './Company.css'
import useAxiosGet from "../../../hooks/ajax/useAxiosGet";
import JoblyApi from "../../../JoblyApi";
import JobList from "../Jobs/JobList";
import CompanyItem from './CompanyItem'
import {useParams} from "react-router-dom";


const Company = ({...props}) => {
    const {handle}=useParams()
    const [company] = useAxiosGet(JoblyApi.getCompany, handle)

    if (!company) return <></>
    const{jobs}=company
    return <>
        <CompanyItem company={company}/>
        <JobList jobs={jobs}/>
    </>
}
export default Company