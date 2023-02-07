import {useContext, useState} from "react";
import GlobalContext from "../../context/GlobalContext";
import {useNavigate} from "react-router-dom";
import useForm from "./useForm";
import JoblyApi from "../../JoblyApi";


export const useFlash = () => {
    const [msg, flash] = useState('')
    return [msg, (err) => flash(Array.isArray(err)
        ? <>{err
            .map(e => e.replace('instance.', ''))
            .map(e => `${e[0].toUpperCase()}${e.substring(1)}`)
            .reduce((e, r) => <>{e}<br/>{r}</>)}</> : err)]
}

export const useOnSubmitAuth=(form,func)=>{
    const[message,flash]=useFlash()
    const navigate=useNavigate()
    const {setToken}= useContext(GlobalContext)
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = await func(form)
            setToken(token)
            navigate('/')
        } catch (err) {
            console.log(err)
         flash(err )
        }
    }
    return [onSubmit,message]
}

const useOnPostForm = (form_init, func,useSubmit) => {
    const form = useForm(form_init)
    const [onSubmit,message]= useSubmit(form[0],func)

    return [form,onSubmit,message]
}


export default useOnPostForm