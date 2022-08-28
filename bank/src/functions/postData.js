import { instance as axios } from "./axios";

export const getCardInfo = async (data) => {
    try {
        const res = await axios.post(`/getcard`, {
            data: data
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