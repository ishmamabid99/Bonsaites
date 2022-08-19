import axios from 'axios';
import { path } from '../env/env';
import Cookies from 'js-cookie';
const token = Cookies.get('x-access');
const adminToken = Cookies.get("admin-access");

export const getNoUsers = async () => {
    try {

        const res = await axios.get(path + '/getnousers', {
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
        const res = await axios.get(path + '/getrequests', {
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
        const _token = token || adminToken;
        const res = await axios.get(path + `/admin/getproductdetails/${_id}`);
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
export const getCardDetails = async (id) => {
    try {
        const res = await axios.get(path + `/getcard/${id}`);
        if (res.status === 200) {
            console.log(res)
            return res.data;
        }
        else {
            return 0;
        }
    }
    catch (err) {
        console.log(err);
    }
}