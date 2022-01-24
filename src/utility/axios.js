import axios from "axios";

export const axiosIns = axios.create({
  baseURL: 'http://rays-server.herokuapp.com/',
});
