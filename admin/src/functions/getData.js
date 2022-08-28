import { instance as axios, appInstance as axios2 } from './axios'
import Cookies from 'js-cookie';
const adminToken = Cookies.get("admin-access");
export const getNoUsers = async () => {
    try {

        const res = await axios.get('/getnousers', {
            headers: {
                Authorization: adminToken
            }
        })
        console.log(res.data)
        if (res.status === 200) {
            return res.data;
        }
        else {
            return false
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const getRequests = async () => {
    try {
        const res = await axios.get('/getrequests', {
            headers: {
                Authorization: adminToken
            }
        })
        if (res.status === 200) {
            return res.data;
        }
        if (res.status === 203) {
            return "None to show"
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const getProductDetails = async (_id) => {
    try {
        console.log(_id)
        const _token = adminToken;
        const res = await axios2.get(`/getproductdetails/${_id}`);
        if (res.status === 200) {
            return res.data;
        }
        else {
            return false
        }
    }
    catch (err) {

    }
}
export const getProductData = async () => {
    try {
        const res = await axios2.get('/getproduct');
        console.log(res)
        if (res.status === 200) {
            return res.data;
        }
        else {
            return false
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const getTransactions = async (type) => {
    let token_;
    token_ = adminToken
    try {
        const res = await axios.get(`/gettransacations`, {
            headers: {
                authorization: token_
            }
        })
        if (res.status === 200) {
            return res.data;
        }
        else {
            return false
        }
    }
    catch (err) {
        console.log(err)
    }
}