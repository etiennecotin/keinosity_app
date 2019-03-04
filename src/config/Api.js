import axios from "axios";

export default axios.create({
    baseURL: 'http://keinosity.etienne-cotin.fr/api/',
    // timeout: 1000,
    headers:{
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        // 'Accept': 'application/json'
    }
});