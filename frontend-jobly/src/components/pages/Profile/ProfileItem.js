const ProfileItem = ({className = '', heading, data}) =>
    <div className={` ${className}`}>
        <h5>{heading}</h5>
        <p>{data}</p>
    </div>
export default ProfileItem