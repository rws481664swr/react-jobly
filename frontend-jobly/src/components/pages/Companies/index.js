import './Companies.css'
import JoblyApi from "../../../JoblyApi";
import useAxiosGet from '../../../hooks/ajax/useAxiosGet'
import CompanyList from "./CompanyList";
import CompanyFilters from "../../filters/CompanyFilters";
import {useCompanyContext} from "../../../context/CompanyContext";


const Companies = () => {
    const [companies, setQuery] = useAxiosGet(JoblyApi.getCompanies,null,[])

    return <>
        <CompanyFilters setQuery={setQuery}/>
        <CompanyList companies={companies}/>
    </>


}
export default Companies