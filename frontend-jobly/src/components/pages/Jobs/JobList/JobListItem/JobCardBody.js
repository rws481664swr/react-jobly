const JobCardBody=({equity, salary})=>
    <div className={'JobCard-card-body'}>

        <div className={'JobCard-card-text '}>
            <div className="d-flex justify-content-between">
                <div className="mb-2">
                    <div>
                        Equity: &nbsp;
                        <>
                            {/*{equity===null?'null':equity}*/}
                            {/*{ && 'No Equity'}*/}
                            {(!equity || equity === '0') ?
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

export default JobCardBody