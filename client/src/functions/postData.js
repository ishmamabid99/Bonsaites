
import axios from 'axios'
import Cookies from 'js-cookie';
import { path } from '../env/env'
import { SwlLoginError } from './Swal';

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
    console.log(res)
    if (res) {
        if (res.status === 200) {
            console.log(res)
            return res;
        }
        else {

            return false;
        }
    }
    else {
        SwlLoginError();
    }
}
export const postProduct = async (data) => {
    try {
        console.log(data);
        const token = Cookies.get('x-access');
        const formData = new FormData();
        formData.append('productImage', data.image);
        formData.append("name", data.name);
        formData.append("quantity", data.quantity);
        formData.append('price', data.price);
        formData.append('desc', data.desc);
        formData.append('type', data.type);
        formData.append("token", token);
        const res = await axios.post(path + '/add-product', formData);
    }

    catch (err) {
        console.log(err)
    }
}