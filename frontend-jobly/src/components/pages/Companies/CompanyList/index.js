import './CompanyList.css'
import CompanyListItem from "./CompanyListItem";
import {ListWrapper} from "../../../util/HelperDivs";
import CompanyFilters from "../../../filters/CompanyFilters";

const CompanyList = ({companies}) => {

    return <>
        <ListWrapper id={'companies-list'}>
        {companies && companies.map(company =>
            <CompanyListItem key={company.handle} company={company}/>)}
    </ListWrapper>
        </>


}
export default CompanyList

