import './Signup.css'
import LabeledInput from "../../util/auth/LabeledInput";
import FormWrapper from "../../util/auth/FormWrapper";
import {signup} from "../../../api/auth";
import FormButton from "../../util/auth/FormButton";
import useAuthForm from "../../../hooks/forms/useOnPostForm";
import {useState} from "react";
import JoblyApi from "../../../JoblyApi";
import UserDetailsForm from "../../navigation/forms/UserDetailsForm";
import Job from "../Job";




const initForm = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
}

const Signup = (props) => {
    const [message,flash]=useState('')
    const formHook=useAuthForm(initForm,JoblyApi.signup,flash)

    return <FormWrapper>
        <h1>Sign Up!</h1>
        <UserDetailsForm formHook={formHook} message={message}  onPost={JoblyApi.signup}/>
    </FormWrapper>
}
export default Signup
