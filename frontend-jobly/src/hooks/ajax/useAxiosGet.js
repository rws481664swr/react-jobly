import {useEffect, useState} from "react";

const useAxiosGet = (func,id) => {

    const [query,setQuery]= useState({})
    const [state, setState] = useState(null)

    useEffect(() => {
        (async () => {
                const data = id
                    ? await func(id, query)
                    : await func(query)

                setState(data)
        })()
    }, [query])
    return [state,setQuery]
}
export default useAxiosGet