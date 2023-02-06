import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const useGetByID = (func, id) => {
    const {[id]: _id} = useParams()
    console.log('get by '+ id)
    const [comp, setCompany] = useState(null)
    useEffect(() => {
        (async () => {
            const company = await func(_id)
            setCompany(company)
        })()
    }, [func, id])
    return comp
}
export default  useGetByID