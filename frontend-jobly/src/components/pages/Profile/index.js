import './Profile.css'
import {Flex, ListWrapper} from "../../util/HelperDivs";
import UserDetailsForm from "../../forms/UserDetailsForm";
import {useFlash} from "../../../hooks/forms/useOnPostForm";
import JoblyApi from "../../../JoblyApi";
import {useEffect, useState} from "react";
import decode from "jwt-decode";
import useGlobalContext from "../../../hooks/state/useGlobalContext";
import useForm from "../../../hooks/forms/useForm";
import FlashComponent from '../../util/FlashComponent'
import useToggle from "../../../hooks/state/useToggle";
import Card from '../../common/Card.js'
import ProfileItem from "./ProfileItem";
import useAxiosGet from "../../../hooks/ajax/useAxiosGet";
import useAxiosForm from '../../../hooks/ajax/useAxiosForm'
const profileInit = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
}



const Profile = () => {
    const {user:username} = useGlobalContext()
    const [message, flash] = useFlash()

    const [editing, toggleEdit] = useToggle(false)
    const [form, onChange, clear] =useAxiosForm(JoblyApi.getUser,username,{...profileInit,username})


    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const {jobs, username: u, isAdmin, applications, ...toSubmit} = form
            await JoblyApi.updateUser(username, toSubmit)
        } catch (err) {
            console.log(err)
            flash(err)
        }
    }

    return <>
        <FlashComponent message={message}/>
        <ListWrapper>
            <Card>
                {!editing && <div>
                    <Flex className={'justify-content-between'}>
                        <h3>Profile</h3>
                        <button onClick={toggleEdit}
                                className="btn btn-primary">
                            Edit
                        `</button>
                    </Flex>
                    {[
                        ['Username', form.username],
                        ['Name', `${form.firstName} ${form.lastName}`],
                        ['Email', form.email]]
                        .map(([heading, data]) =>
                            <ProfileItem
                                key={data}
                                className={'m-4'}
                                heading={heading}
                                data={data}
                            />)}
                </div>
                }
                {editing && <UserDetailsForm
                    className={'my-3 mx-4'}
                    lockUsername={true}
                    buttonText={'Update'}
                    onSubmit={async (e) => {
                        await onSubmit(e)
                        toggleEdit();
                    }}
                    form={[form, onChange, clear]}

                />}
            </Card>

        </ListWrapper>
    </>
}


export default Profile