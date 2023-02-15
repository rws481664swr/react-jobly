import './JobList.css'
import JobListItem from "./JobListItem";
import {ListWrapper} from "../../../util/HelperDivs";
import useGlobalContext from "../../../../hooks/state/useGlobalContext";
import JoblyApi from "../../../../JoblyApi";

import JobFilters from "../../../filters/JobFilters";
import {useEffect, useState} from "react";
import FlashComponent from "../../../util/FlashComponent";
import {useFlash} from "../../../../hooks/forms/useOnPostForm";


const JobList = ({className = ''}) => {
    const {user: username} = useGlobalContext()

    const [applied, setApplied] = useState(() => new Set())
    const [query, setQuery] = useState({})
    const [companies, setCompanies] = useState({})
    const [jobs, setJobs] = useState([])
    const [message, flash] = useFlash()

    const apply = async (id) => {
        try {
            await JoblyApi.applyForJob(username, id)
            setApplied(() =>
                new Set([id, ...applied.values()])
            )
        } catch (e) {
            flash(e)
            console.error(e)
        }
    }

    useEffect(() => {
        (async () => {
            console.debug('get')
            const companies = await JoblyApi.getCompanies()
            const companyMap = companies
                .map(({handle, name}) => ({[handle]: name}))
                .reduce((e, r) => ({...e, ...r}))
            setCompanies(companyMap)

        })()
    }, [])
    useEffect(
        () => {
            (async () => {
                const [jobs, user] = await Promise.all([
                    JoblyApi.getJobs(query),
                    JoblyApi.getUser(username)

                ])
                setApplied(new Set(user.applications))
                setJobs(jobs)
            })()
        },
        [query, username]
    )


    return <>
        <FlashComponent message={message}/>
        <JobFilters setQuery={setQuery}/>
        <ListWrapper>
            {jobs.map(
                (j) =>
                    <JobListItem companyHandle={companies[j.companyHandle]}
                                 applied={applied.has(j.id)}
                                 apply={() => apply(j.id)}
                                 className={``}
                                 key={j.id}
                                 job={j}/>
            )}


        </ListWrapper>
    </>
}
export default JobList
