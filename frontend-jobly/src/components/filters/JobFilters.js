import {useState} from "react";
import './JobFilters.css'
const JobFilters = ({setQuery}) => {
    const [[minSalary, setMinSalary], [equity, setEquity], [search, setSearch]] = [useState(undefined), useState(undefined), useState(undefined)]
    const clear= ()=> {
        setSearch('')
        setEquity(false)
        setMinSalary("")
        setQuery({})
    }
    const updateSearch = () => {
        const query = {}
        if (minSalary) {
            query.minSalary = minSalary
        }
        if (equity) {
            query.hasEquity = equity
        }
        if (search) {
            query.title = search
        }
        setQuery(query)

    }

    return <>
        <form id='job-filters-form' className={'form-control d-flex justify-content-between'} onSubmit={(e) => e.preventDefault()}>
            <div className={''}>
                <label htmlFor="min-salary" placeholder={'Min Salary'}>Min Salary</label>
                <input onChange={e => setMinSalary(e.target.value)} value={minSalary} id="min-salary" type="number"/>
            </div>
            <div className={''}>
                <label htmlFor="min-hasEquity">Has Equity</label>
                <input id="min-hasEquity" onChange={e => setEquity(e.target.checked)} value={equity}  type="checkbox"/>
            </div>
            <div className={' '}>
                <label htmlFor="search">Search</label>
                <input id={'search'} onChange={e => setSearch(e.target.value)} value={search} type={'text'} placeholder={'Search'}/>
            </div>
            <button onClick={clear} type="button" className={'btn btn-dark'}>Clear Filters</button>
            <button onClick={updateSearch} type="submit" className={'btn btn-primary'}>Update Search</button>
        </form>
    </>
}

export default JobFilters