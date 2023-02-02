import './Login.css'
import FormWrapper from "../auth/FormWrapper";
import LabeledInput from "../auth/LabeledInput";
import FormButton from "../auth/FormButton";
import useOnPostForm from "../../../hooks/useOnPostForm";
import {useState} from "react";
import JoblyApi from "../../../JoblyApi";

const init={username:'',password:'' }
const Login = ({...props})=> {
    const [message,flash]=useState('')
    const [form,onChange,, onSubmit]= useOnPostForm(init,JoblyApi.login,flash)

    return <FormWrapper>
        {message && <div className={'text-danger'}>{message}</div>}
        <form>
            <LabeledInput
                id={'login-form-username'}
                onChange={onChange}
                value={form.username}
                label={'Username'}
                name={'username'}
            />
            <LabeledInput
                id={'login-form-password'}
                onChange={onChange}
                value={form.password}
                label={'Password'}
                name={'password'}
                type={'password'}
            />
            <FormButton onClick={onSubmit} text={'Login'}/>
        </form>
    </FormWrapper>
}
export default Login