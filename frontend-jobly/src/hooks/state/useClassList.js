import {useState} from "react";

const useClassList =(classes='')=>{
    const[classList,setState] = useState(classes)
    const toggle=(clazz) =>setState(
        state=> {
            let classList = state.split(' ')
            if(classList.includes(clazz)){
                 classList= classList.filter(e=>e!==clazz)
            }else{
                 classList.push(clazz)
            }
            return classList.join(' ')
        })
    const addClass = (clazz)=>setState(state=>[
        clazz,...state.split(' ')
    ].join(' '))
    const removeClass = (clazz)=>setState(state=>state
        .split(' ')
        .filter(e=>e!==clazz)
        .join(' '))




    return {classList,toggle,addClass,removeClass}
}
export default useClassList