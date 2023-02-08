const LabeledInput=({className='',label,type='text',id,value,onChange,name,...input_props})=>
    <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input
            className={`form-control `}
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            name={name}
            {...input_props}
        />
</div>
export default LabeledInput