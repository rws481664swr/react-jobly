import axios from "axios";
import Job from "./components/pages/Job";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
    // the token for interactive with the API will be stored here.
    static token;

    static async auth(body,action){
        try {
            const{token}= (await axios.post(`${BASE_URL}/auth/${action}`, body)).data
            JoblyApi.token = token
            return token
        }catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
    static async login(body) {
        return await JoblyApi.auth(body,'token')
    }
    static async signup(body) {
       return await JoblyApi.auth(body,'register')
    }
    static async updateUser(username,body){
        console.log('update',username,body)
        const response= await JoblyApi.request(`users/${username}`,body,'patch')
        return response.user;
    };

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes


    /** get user by username */
    static async getUser(username) {
        let res = await JoblyApi.request(`users/${username}`,{showCompany:true});
        return res.user;
    }

    /** get job by id **/
    static async getJob(id){
        let res = await JoblyApi.request(`jobs/${id}`);
        return res.job;
    }

    /** get all jobs */
    static async getJobs(query={}) {
        let res = await JoblyApi.request(`jobs`, query);
        return res.jobs;
    }

    /** get all companies */
    static async getCompanies(query={}) {
        let res = await JoblyApi.request(`companies`,query);
        return res.companies;
    }


    /** Get details on a company by handle. */
    static async getCompany(handle) {
        let res = await JoblyApi.request(`companies/${handle}`);
        return res.company;
    }

    static async applyForJob(username, jobId) {
       await JoblyApi.request(`users/${username}/jobs/${jobId}`,{},'post')
    }

    static async applications(username){
        const  {jobs}= await JoblyApi.request(`users/${username}/jobs`)
        return jobs
    }
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
export default JoblyApi