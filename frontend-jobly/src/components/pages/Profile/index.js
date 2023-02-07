import './Profile.css'
import {ListWrapper} from "../../util/HelperDivs";
import UserDetailsForm from "../../forms/UserDetailsForm";
import {useFlash} from "../../../hooks/forms/useOnPostForm";
import JoblyApi from "../../../JoblyApi";
import {useEffect, useState} from "react";
import decode from "jwt-decode";
import useGlobalContext from "../../../hooks/state/useGlobalContext";
import useForm, {useEffectForm} from "../../../hooks/forms/useForm";
import FlashComponent from '../../util/FlashComponent'



const useGetByID =(func,id,defaultState=null)=>{
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
const  profileInit={
    firstName: '',
        lastName: '',
        password: '',
        email: '',
}
const initForm = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
}
const Profile = () => {
    const {token} = useGlobalContext()
    const {username} = decode(token)
    const [message, flash] = useFlash()
    const user= useGetByID(JoblyApi.getUser,username,profileInit)

    let formState
    const [form,,,setState] = formState = useForm(user)
    useEffect(()=>{setState(user)},[user])
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const {username:u,isAdmin,applications,...toSubmit}=form
            const data = await JoblyApi.updateUser(username, toSubmit)
        } catch (err) {
            console.log(err)
            flash(err)
        }
    }


    return <>
        <FlashComponent message={message}/>
        <ListWrapper>
            <UserDetailsForm
                lockUsername={true}
                buttonText={'Update'}
                onSubmit={onSubmit}
                form={formState}
            />
        </ListWrapper>
    </>
}
export default Profile