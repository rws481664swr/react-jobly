import './Signup.css'
import FormWrapper from "../../util/auth/FormWrapper";
import UserDetailsForm from "../../forms/UserDetailsForm";
import {useFlash} from "../../../hooks/forms/useOnPostForm";
import JoblyApi from "../../../JoblyApi";
import useForm from "../../../hooks/forms/useForm";
import {useNavigate} from "react-router-dom";
import FlashComponent from "../../util/FlashComponent";
import useGlobalContext from "../../../hooks/state/useGlobalContext";

const init={
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
}
const Signup = (props) => {
    const form = useForm(init)
    const[message,flash]=useFlash()
    const navigate=useNavigate()
    const {setToken}= useGlobalContext()
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = await JoblyApi.signup(form[0])
            setToken(token)
            navigate('/')
        } catch (err) {
            console.log(err)
            flash(err )
        }
    }
    return <FormWrapper>
        <h1>Sign Up!</h1>
        <FlashComponent message={message}/>
        <UserDetailsForm lockUsername={false}
                         form={form}
                         buttonText={'Register'}
                         onSubmit={onSubmit}
        />
    </FormWrapper>
}
export default Signup
