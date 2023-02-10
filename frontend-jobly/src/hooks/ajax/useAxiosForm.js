import {useEffect, useState} from "react";

const useAxiosForm= (func,id,init)=>{
    const [initForm,setInitForm]=useState(init)
    const[form,setForm]=useState({...initForm})

    useEffect(()=>{(async ()=>{
        const formData = await func(id)
        setInitForm(formData)
        setForm(formData)
    })()},[])
    
    const onChange=(e)=>{
        const {target:{value,name}}=e
        setForm(state=>({...state,[name]:value}))
    }

    const clear = ()=>setForm({...initForm})
    return [form,onChange,clear,setForm]
}
export default useAxiosForm