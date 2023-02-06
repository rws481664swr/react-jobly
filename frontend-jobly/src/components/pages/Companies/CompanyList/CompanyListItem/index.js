import './CompanyListItem.css'
import {Link} from "react-router-dom";

const CompanyListItem = ({company: {handle, numEmployees, description, logoUrl, name}}) => <>
    <div className="CompanyListItem__card">
        <div className={'CompanyListItem__header'}>
            <div>                {name}
            </div>

            <div className={'CompanyListItem__link'}>
                <div>
                    <Link to={`/companies/${handle}`}>@{handle}</Link>
                </div>

            </div>
        </div>
        <div className={'CompanyListItem__img'}>
            <img src={logoUrl} alt={handle}/>
        </div>
        <div className="CompanyListItem__body">

            <div className={'CompanyListItem__employees'}>
                Number of Employees: {numEmployees}
            </div>
            <div className={'CompanyListItem__description'}> {description}</div>
        </div>
    </div>
</>
export default CompanyListItem