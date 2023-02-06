import './Company.css'
import {useParams} from "react-router-dom";
import useAxiosGet from "../../../hooks/ajax/useAxiosGet";
import JoblyApi from "../../../JoblyApi";
import {useEffect, useState} from "react";
import JobList from "../Jobs/JobList";
import CompanyItem from './CompanyItem'
import JobFilters from "../../filters/JobFilters";
import {ListWrapper} from "../../util/HelperDivs";
import useGetByID from "../../../hooks/ajax/useGetByID";


const Company = ({...props}) => {
    const comp = useAxiosGet(JoblyApi.getCompany, 'handle')
    const [jobs, setQuery] = useAxiosGet(JoblyApi.getJobs)
    if (!comp) return <></>
    return <>
        <CompanyItem company={comp}/>
        <JobFilters setQuery={setQuery}/>
        <JobList jobs={jobs.filter(j=> j.companyHandle===comp.handle)}/>
    </>
}
export default Company