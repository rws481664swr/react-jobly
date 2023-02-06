import './CompanyFilters.css'
import {useState} from "react";
const CompanyFilters = ({setQuery}) => {
    const [[minEmployees, setMinEmployees], [maxEmployees, setMaxEmployees], [search, setSearch]] = [useState(undefined), useState(undefined), useState(undefined)]
    const clear= ()=> {
        setSearch('')
        setMinEmployees('')
        setMaxEmployees("")
        setQuery({})
    }

    const updateSearch = () => {
        const query = {}
        if (minEmployees) {
            query.minEmployees = minEmployees
        }
        if (maxEmployees) {
            query.maxEmployees = maxEmployees
        }
        if (search) {
            query.nameLike = search
        }
        setQuery(query)

    }

    return <>
        <form id='job-filters-form' className={'form-control d-flex justify-content-between'} onSubmit={(e) => e.preventDefault()}>
            <div className={''}>
                <label  className={'d-none'} htmlFor="min-Employees" placeholder={'Min Employees'}>Min Employees</label>
                <input
                    placeholder={'Min Employees'}
                    onChange={e => setMinEmployees(e.target.value)}
                    value={minEmployees} id="min-Employees"
                    type="number"/>
            </div>
            <div className={''}>
                <label className={'d-none'} htmlFor="max-employees" >Min Employees</label>
                <input onChange={e => setMaxEmployees(e.target.value)}
                       placeholder={'Max Employees'}
                       value={maxEmployees} id="max-employees" type="number"/>
            </div>
            <div className={' '}>
                <label className={'d-none'} htmlFor="search">Search</label>
                <input id={'search'}
                       onChange={e => setSearch(e.target.value)}
                       value={search}
                       type={'text'}
                       placeholder={'Search'}/>
            </div>
            <button onClick={clear} type="button" className={'btn btn-dark'}>Clear Filters</button>
            <button onClick={updateSearch} type="submit" className={'btn btn-primary'}>Update Search</button>
        </form>
    </>
}
export default CompanyFilters