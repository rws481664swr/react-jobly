import {Flex} from "../util/HelperDivs";

export const input  = (id,onChange,value,type,label,placeholder)=>({id,onChange,value,type,label,placeholder})

const Filter= ({update,clear,inputs})=><>
    <form id={'job-filters-form'} onSubmit={e=>e.preventDefault()}>
        <Flex className={'justify-content-around'}>
            {inputs.map(({id,onChange,value,type,placeholder,label})=>

                <Flex className={' '}>
                    <label htmlFor={id}>{label}</label>
                    <input id={id} onChange={onChange} value={value} type={type} placeholder={''}/>
                </Flex>
            )}
            <button onClick={clear} type="button" className={'btn btn-dark'}>Clear Filters</button>
            <button onClick={update} type="submit" className={'btn btn-primary'}>Update Search</button>
        </Flex>
    </form>
</>
export default Filter