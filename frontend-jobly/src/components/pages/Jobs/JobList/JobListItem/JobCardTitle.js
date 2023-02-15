import {Flex} from "../../../../util/HelperDivs";
import {Link} from "react-router-dom";

const JobCardTitle = ({companyName, companyHandle, applied, title, apply}) =>
    <div className={"JobCard-title"}>
        <Flex className={'justify-content-between'}>
            <div>
                <span>{title}</span> at <Link className={'JobCard-card-link'}
                                              to={`/companies/${companyHandle}`}>
                {companyName}
            </Link>
            </div>
            {!applied && <div> <button onClick={apply} className="btn btn-primary">Apply</button></div>}
            {applied && <div>Applied</div>}

        </Flex>
    </div>

export default JobCardTitle