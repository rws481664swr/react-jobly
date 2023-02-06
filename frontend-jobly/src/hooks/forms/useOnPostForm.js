import {useContext, useState} from "react";
import GlobalContext from "../../context/GlobalContext";
import {useNavigate} from "react-router-dom";
import useForm from "./useForm";
import JoblyApi from "../../JoblyApi";

const useOnPostForm = (form_init, func) => {
    const [message,flash]=useState('')
    const {setToken, setUser,setIsAdmin} = useContext(GlobalContext)
    const navigate = useNavigate()

    const formArgs = useForm(form_init)
    const [form, onChange, clearForm] = formArgs
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = await func(form)
            setToken(token)
            const {isAdmin}=await JoblyApi.getUser(form.username)
            setUser(form.username)
            setIsAdmin(isAdmin)
            navigate('/')
        } catch (err) {
            console.log(err)
            flash(Array.isArray(err )? <>{err.map(e=>e.replace('instance.',''))
                .map(e=>`${e[0].toUpperCase()}${e.substring(1)}`)
                .reduce((e,r)=><>{e}<br/>{r}</>)}</>:err)
        }
    }
    return [[form, onChange, clearForm], onSubmit,[message,flash]]
}


export default useOnPostForm