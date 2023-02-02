import {useContext} from "react";
import GlobalContext from "../context/GlobalContext";
import {useNavigate} from "react-router-dom";
import useForm from "./useForm";

const useOnPostForm= (form_init,func,flash)=> {
    const context= useContext(GlobalContext)
    const {setToken,setUser}=context
    const navigate = useNavigate()

    const formArgs= useForm(form_init)
    const [form,onChange,clearForm]= formArgs
    const onSubmit=  async (e) => {
        e.preventDefault()
        try {
            const token= await func(form)
            console.warn(token)
            setToken(token)
            setUser(form.username)
            navigate('/')
        } catch (e) {
            console.log(e.response.data.error.message)
            flash(e.response.data.error.message)
        }
    }
    return [form,onChange,clearForm, onSubmit]
}




export default useOnPostForm