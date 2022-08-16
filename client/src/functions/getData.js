import axios from 'axios';
import { path } from '../env/env';
import Cookies from 'js-cookie';
const token = Cookies.get('x-access');


export const getNoUsers = async () => {
    try {
        const adminToken = Cookies.get("admin-access");
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