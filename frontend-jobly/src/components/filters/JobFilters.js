import {useState} from "react";
import './JobFilters.css'
import LabeledInput from "../util/auth/LabeledInput";
import {Flex} from "../util/HelperDivs";
import Filter, {input} from "./Filter";
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
    const setMinSalaryChange = e=>setMinSalary(e.target.value)
    const setEquityChange = e=>setEquity(e.target.checked)
    const setSearchChange = e=>setSearch(e.target.value)


    const inputs=[
        input('min-salary',setMinSalaryChange,minSalary,'number',"Min Salary","Min Salary"),
        input('has-equity',setEquityChange,equity,'checkbox',"Has Equity","Has Equity"),
        input('form-search',setSearchChange,search,'text','Search for Jobs','Search for Jobs')
    ]
    return <Filter clear={clear} inputs={inputs} formId={'job-filters-form'} update={updateSearch}/>
}

export default JobFilters