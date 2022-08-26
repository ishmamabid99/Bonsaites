import axios from 'axios';
import { path } from '../env/env';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
const token = Cookies.get('x-access');
const adminToken = Cookies.get("admin-access");
const accessToken = Cookies.get('x-access')
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
        const _token = accessToken || adminToken;
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
export const getProductData = async () => {
    try {
        const res = await axios.get(path + '/getproduct');
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
export const getWishList = async () => {
    try {
        const decode = jwtDecode(accessToken);
        const res = await axios.get(path + `/getwishlist/${decode.user_id}`, {
            headers: {
                authorization: accessToken
            }
        });
        console.log(res)
        if (res.status === 200) {
            return res.data;
        }
        else {
            return []
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const getTransactions = async (type) => {
    let token_;
    if (type === "org") {
        token_ = accessToken;
    }
    else {
        token_ = adminToken
    }
    try {
        const res = await axios.get(path + `/gettransacations`, {
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
export const getMyProducts = async () => {
    try {
        const { user_id } = jwtDecode(accessToken)
        const res = await axios.get(path + `/getmyproducts/${user_id}`, {
            headers: {
                authorization: accessToken
            }
        })
        console.log(res)
        if (res.status === 200) {
            return res.data
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const getMyOrder = async () => {

    try {
        const { user_id } = jwtDecode(accessToken)
        const res = await axios.get(path + `/getmyorders/${user_id}`, {
            headers: {
                authorization: accessToken
            }
        });
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