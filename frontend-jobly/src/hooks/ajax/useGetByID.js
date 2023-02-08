import {useEffect, useState} from "react";

const useGetByID = (func, id, defaultState = null) => {
    const [state, setState] = useState(defaultState)
    useEffect(() => {
        (async () => {
            try {
                const response = await func(id)
                setState({...response})
            } catch (e) {
                console.log('err', e)
            }
        })()
    }, [])
    return state
}
export default useGetByID