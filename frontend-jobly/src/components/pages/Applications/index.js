import useGlobalContext from "../../../hooks/state/useGlobalContext";
import JoblyApi from "../../../JoblyApi";
import {ListWrapper} from "../../util/HelperDivs";
import AsyncJobListItem from "./AsyncJobListItem";
import useAxiosGet from "../../../hooks/ajax/useAxiosGet";
import {useEffect, useState} from "react";

const Applications = () => {
    const {user: username} = useGlobalContext()
    const [user] = useAxiosGet(JoblyApi.getUser, username)


    const [companies,setCompanies]= useState({})


    useEffect(
        () => {
            (async () => {
                const [ companies] = await Promise.all([
                    JoblyApi.getCompanies()
                ])
                const companyMap= companies
                    .map(({handle,name})=>({[handle]:name}))
                    .reduce((e,r)=>({...e,...r}))
                setCompanies(companyMap)
            })()
        },
        []
    )






    if(!user)return <></>

    const {jobs}=user
    return <>
        <ListWrapper>
            {jobs && jobs.map(id => <AsyncJobListItem companies={companies} key={id} id={id}/>)}
        </ListWrapper>
    </>
}
export default Applications