import './Signup.css'
import LabeledInput from "../auth/LabeledInput";
import FormWrapper from "../auth/FormWrapper";
import {signup} from "../../../api/auth";
import FormButton from "../auth/FormButton";
import useAuthForm from "../../../hooks/useOnPostForm";
import {useState} from "react";
import JoblyApi from "../../../JoblyApi";


const initForm = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
}
const validate = (form) => {
    const {username, firstName, lastName, password, email} = form
    if (username.length < 3) return
    if (lastName.length < 2) return
    if (firstName.length < 2) return
    // if ( password.length < 8 )return
    if (!password) return
    if (email.length < 4) return
    return true
}



const Signup = (props) => {
    const [message,flash]=useState('')

        const [form,onChange,clear,onClick]=useAuthForm(initForm,JoblyApi.signup,flash)

    return <FormWrapper>
        <h1>Sign Up!</h1>

        {message && <div className={'text-danger'}>{message}</div>}
        <form>
            <LabeledInput
                id={'signup-form-username'}
                onChange={onChange}
                value={form.username}
                label={'Username'}
                name={'username'}
            />
            <LabeledInput
                id={'signup-form-password'}
                onChange={onChange}
                value={form.password}
                label={'Password'}
                name={'password'}
                type={'password'}
            />
            <LabeledInput
                id={'signup-form-firstName'}
                onChange={onChange}
                value={form.firstName}
                label={'First Name'}
                name={'firstName'}
            />
            <LabeledInput
                id={'signup-form-lastName'}
                onChange={onChange}
                value={form.lastName}
                label={'Last Name'}
                name={'lastName'}
            />
            <LabeledInput
                id={'signup-form-email'}
                onChange={onChange}
                value={form.email}
                label={'Email'}
                type={'email'}
                name={'email'}
            />
        </form>
        <FormButton onClick={onClick} text={'Register'}/>
    </FormWrapper>
}
export default Signup