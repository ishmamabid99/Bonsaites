import axios from 'axios';
import { path1, path2 } from '../env/env';

const instance = axios.create({
    baseURL: path1.toString()
});
const appInstance = axios.create({
    baseURL: path2.toString()
})
export { instance, appInstance }