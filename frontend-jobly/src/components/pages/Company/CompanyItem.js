import './CompanyItem.css'


const CompanyItem = ({company}) => company &&
    <div className={`CompanyItem`}>
        <div className={'d-flex justify-content-between'}>

            <div className={`CompanyItem__handle `}> @{company.handle} {company.name} </div>
            <div className={`CompanyItem__logoUrl `}><img src={company.logoUrl} alt={company.handle}/></div>
        </div>
        {company.numEmployees&& <div className={`CompanyItem__numEmployees `}>
            Number of Employees: {company.numEmployees}
        </div>}
        <div className={`CompanyItem__description col-8`}>
           <p> {company.description}</p>
        </div>
    </div>
export default CompanyItem