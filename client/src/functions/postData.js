
import axios from 'axios'
import { path } from '../env/env'


export const registerUser = async (data) => {
    const res = await axios.post(path + '/register', {
        data: data
    });
    if (res) {
        if (res.status === 201) {
            return res;
        }
        else {
            return false;
        }
    }
}
export const registerOrg = async (data) => {
    const res = await axios.post(path + '/register-org', {
        data: data
    })
    if (res) {
        if (res.status === 201) {
            return res;
        }
        else return false;
    }
}

export const loginUser = async (data) => {
    const res = await axios.post(path + '/login', {
        data: data
    });
    if (res) {
        if (res.status === 200) {
            console.log(res)
            return res;
        }
        else {
            return false;
        }
    }
}