import './JobListItem.css'
import {Link} from "react-router-dom";

const JobListItem = ({className, job: {companyHandle, companyName, equity, id, salary, title}}) =>
    <div className={`${className} JobCard-card`}>
        <div className={"JobCard-title"}>
            <span>{title}</span> at <Link className={'JobCard-card-link'}
                  to={`/companies/${companyHandle}`}>
                {companyName}
            </Link>
        </div>
        <div className={'JobCard-card-body'}>

            <div className={'JobCard-card-text'}>
                <div>
                    Equity:<>
                    {!equity && 'No Equity'}
                    {equity && (equity * 100).toFixed(2) + '%'}
                </>
                </div>
                <div>
                    {salary && `Salary: ${salary}`}
                </div>
            </div>
        </div>

    </div>
export default JobListItem
