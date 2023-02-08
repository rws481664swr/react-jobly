import './Card.css'
const Card=({children,className,content})=>
    <div className={`Card__main ${className||''}`}>
        {children}{content}
    </div>

export default Card