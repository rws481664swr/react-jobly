import './JobList.css'
import JobListItem from "./JobListItem";
import {ListWrapper} from "../../../util/HelperDivs";
import useGlobalContext from "../../../../hooks/state/useGlobalContext";
import JoblyApi from "../../../../JoblyApi";

import JobFilters from "../../../filters/JobFilters";
import {useCallback, useEffect, useRef, useState} from "react";
import FlashComponent from "../../../util/FlashComponent";
import {useFlash} from "../../../../hooks/forms/useOnPostForm";

const JobList = ({className = ''}) => {
    const {user: username} = useGlobalContext()
    const appliedForIds = useRef(new Set())
    const [query, setQuery] = useState({})
    const [jobs, setJobs] = useState([])
    const [message, flash] = useFlash()

    const apply = useCallback(async (id) => {
        try {
            await JoblyApi.applyForJob(username, id)
            appliedForIds.current.add(id)
            setJobs(jobs => jobs.filter(e => e.id !== id))
        } catch (e) {
            flash(e)
            console.error(e)
        }
    }, []);


    useEffect(
        () => {
            (async () => {
                const [jobs, user] = await Promise.all([
                    JoblyApi.getJobs(query),
                    JoblyApi.getUser(username)
                ])
                user.jobs.forEach(e => appliedForIds.current.add(e))
                setJobs(jobs)
                setJobs(j=>j.filter(e => !appliedForIds.current.has(e.id)))
            })()
        },
        [query]
    )


    return <>
        <FlashComponent message={message}/>
        <JobFilters setQuery={setQuery}/>
        <ListWrapper>
            {jobs.map(
                (j) => <>
                    {j.id}
                    <JobListItem applied={appliedForIds.current.has(j.id)} apply={()=>apply(j.id)} className={``} key={j.id}
                                    job={j}/>
                </>)}


        </ListWrapper>
    </>
}
export default JobList
