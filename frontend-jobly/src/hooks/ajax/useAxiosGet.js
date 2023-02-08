import {useEffect, useState} from "react";

const useAxiosGet = (func,id,defaultValue=null) => {
    const [query,setQuery]= useState({})
    const [state, setState] = useState(defaultValue)

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