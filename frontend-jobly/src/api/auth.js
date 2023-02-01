import axios from 'axios'
const baseURL=`http://localhost:3001`
export const signup =async (body)=>(await axios.post(`${baseURL}/auth/register`,body)).data
export const login =async (body)=>(await axios.post(`${baseURL}/auth/token`,body)).data