import axios from "axios";

export const axiosIns = axios.create({
    baseURL: 'https://rays-server.herokuapp.com/',
});
