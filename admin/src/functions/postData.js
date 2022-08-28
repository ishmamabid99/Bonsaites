import { instance as axios } from './axios'
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { SwlCredentialsError, SwlLoginError, SwlNoAccountError } from './Swal';
const adminToken = Cookies.get('admin-access')

export const adminLogin = async (data) => {
    try {
        const res = await axios.post('/adminlogin', data);
        console.log(res.data)
        if (res.status === 200) {
            return res.data;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const updateProduct = async (id) => {
    try {
        const res = await axios.post('/adminupdate', {
            id: id
        }, {
            headers: {
                authorization: adminToken
            }
        });
        if (res.status === 200) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const deleteProduct = async (id) => {
    try {
        const res = await axios.post('/deleteproduct', {
            id: id
        }, {
            headers: {
                authorization: adminToken
            }
        })
        if (res.status === 200) {
            return true;
        }
        else {
            return false
        }
    }
    catch (err) {
        console.log(err)
    }
}


export const updatedelivery = async (id) => {
    try {
        const res = await axios.post(`/updatedelivery`, {
            data: id
        }, {
            headers: {
                authorization: adminToken
            }
        });
        console.log(res)
        if (res.status === 200) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {

    }
}
export const proceedBank = async (data) => {
    try {
        console.log(data)
        const res = await axios.post(`/proceedbank`, {
            data: data
        }, {
            headers: {
                authorization: adminToken
            }
        });
        console.log(res)
        if (res.status === 200) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {

    }
}
export const postOrder = async (data) => {
    try {
        const res = await axios.post(`/postorder`, {
            data: data
        }, {
            headers: {
                authorization: adminToken
            }
        });
        if (res.status === 200) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.log(err)
    }
}