

const FormButton=({onClick,text})=>
    <button onClick={onClick}
            className={'btn btn-primary w-100'}
            type="submit">{text}</button>

export default FormButton
