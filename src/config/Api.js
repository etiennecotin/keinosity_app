import axios from "axios";
import {AsyncStorage} from "react-native";

const getToken = async () => {
    try {
        const userToken = await AsyncStorage.getItem('userToken').then(function(data) {
            return data;
        });
        if (userToken !== null) {
            return userToken;
        }
        return '';
    } catch (error) {
        // Error retrieving data
    }
};

const axiosInstance = axios.create({
    baseURL: 'http://keinosity.etienne-cotin.fr/api/',
    // timeout: 1000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
async config => {
            const token = await getToken();
            config.headers.Authorization = `Bearer ${token}`;
            return config;
    },
    error => Promise.reject(error)
);

export default axiosInstance;
