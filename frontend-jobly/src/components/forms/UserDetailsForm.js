import LabeledInput from "../util/auth/LabeledInput";
import FormButton from "../util/auth/FormButton";

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

const UserDetailsForm = ({
                             className = '',
                             lockUsername = false,
                             buttonText,
                             onSubmit,
                             form: [form, onChange, clearForm]
                         }) =>
    <div className={className}>

        <form onSubmit={e => {
            onSubmit(e)
            e.preventDefault()
        }}>
            < LabeledInput
                className={'my-4'}
                disabled={lockUsername}
                id={'signup-form-username'}
                onChange={onChange}
                value={form.username}
                label={'Username'}
                name={'username'}
            />


            <LabeledInput
                className={'my-4'}

                id={'signup-form-password'}
                onChange={onChange}
                value={form.password}
                label={'Password'}
                name={'password'}
                type={'password'}
            />
            <LabeledInput
                className={'my-4'}
                id={'signup-form-firstName'}
                onChange={onChange}
                value={form.firstName}
                label={'First Name'}
                name={'firstName'}
            />
            <LabeledInput
                className={'my-4'}
                id={'signup-form-lastName'}
                onChange={onChange}
                value={form.lastName}
                label={'Last Name'}
                name={'lastName'}
            />
            <LabeledInput
                className={'my-4'}
                id={'signup-form-email'}
                onChange={onChange}
                value={form.email}
                label={'Email'}
                type={'email'}
                name={'email'}
            />
            <div
                className={'my-4'}>
            <FormButton text={buttonText}/>
            </div>
        </form>
    </div>

export default UserDetailsForm