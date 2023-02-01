import './Signup.css'
import LabeledInput from "../../util/LabeledInput";
import useForm from "../../../hooks/useForm";
import FormWrapper from "../auth/FormWrapper";
import {signup} from "../../../api/auth";
import {useContext, useEffect, useState} from "react";
import GlobalContext from "../../../context";
import {useHistory} from "react-router-dom";


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

const Signup = () => {
    const history = useHistory()
    const {setToken, setUser} = useContext(GlobalContext)
    const [form, onChange, clear] = useForm(initForm)
    const [msg,flash]=useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
flash('')
        if (!validate(form)) return

        try {
            const {token} = await signup(form)
            setUser(form.username)
            setToken(token.token)
            console.log(token.token)
            clear()
            history.push('/')
        } catch ({response: {data,status},code,message}) {
            console.log(data,code,message);
            flash(data.message)
        }

    }
    return <FormWrapper>
        <h1>Sign Up!</h1>
        {msg&& <div className={'text-danger'}>{msg}</div>}
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
        <button onClick={onSubmit} className={'btn btn-primary w-100'} type="submit">Register</button>
    </FormWrapper>
}
export default Signup