import axios from 'axios';
import {toast} from 'react-toastify';

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const registerUser = async(userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/users/register/`, userData, {withCredentials: true});
        if(response.statusText === 'OK'){
            toast.success('User registered successfully');
        }
    } catch (error) {
        const message = (
            error.respons && error.response.data && error.response.data.message
        ) || error.message || error.toString();
        toast.error(message);
    }
};