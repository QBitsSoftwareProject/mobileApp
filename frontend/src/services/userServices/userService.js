import axios from 'axios'

const URL= "http://192.168.8.149:3000/api/v1/user"

export const userLogin = async (email, password)=>{
    try{
        const response = await axios.post(`${URL}/login`, { email, password});
        return response.data
    }catch(err){
        throw err;
    }
}