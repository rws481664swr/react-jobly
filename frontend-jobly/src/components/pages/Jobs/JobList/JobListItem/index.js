import './JobListItem.css'
import {Link} from "react-router-dom";
import {Flex} from "../../../../util/HelperDivs";

const JobListItem = ({className, job: {companyHandle, companyName, equity, id, salary, title}}) =>
    <div className={`${className} JobCard-card`}>
        <div className={"JobCard-title"}>
            <Flex className={'justify-content-between'}>
                <div>
            <span>{title}</span> at <Link className={'JobCard-card-link'}
                                          to={`/companies/${companyHandle}`}>
            {companyName}
        </Link>
                </div>
            <div>
                <button className="btn btn-primary">Apply</button>
            </div>

    </Flex>
        </div>
        <div className={'JobCard-card-body'}>

            <div className={'JobCard-card-text '}>
                <div className="d-flex justify-content-between">
                    <div className="mb-2">
                        <div>
                            Equity: &nbsp;
                            <>
                                {/*{equity===null?'null':equity}*/}
                                {/*{ && 'No Equity'}*/}
                                {(!equity||equity==='0')?
                                    'No Equity'
                                    : (equity * 100).toFixed(2) + '%'}
                            </>
                        </div>

                        <div>
                            {salary && `Salary: ${salary}`}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
export default JobListItem
