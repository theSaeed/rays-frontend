import React, { useReducer, useContext, createContext } from "react";
import { axiosIns } from "../utility/axios";

const initialState = {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    userLevel: localStorage.getItem("userLevel") ? localStorage.getItem("userLevel") : null
};

const setHeader = (token) => {
    if (token !== null) {
        axiosIns.interceptors.request.use(function (config) {
            config.headers.Authorization = token;
            return config;
        });
    }
};

setHeader(localStorage.getItem("token"));

const reducer = (state, action) => {
    switch (action.type) {
        case "logout":
            setHeader(null);
            localStorage.removeItem("token");
            localStorage.removeItem("userLevel");
            return { ...state, token: null, userLevel: null };
        case "success":
            setHeader(action.token);
            localStorage.setItem("token", action.token);
            localStorage.setItem("userLevel", action.userLevel);
            return { ...state, token: action.token, userLevel: action.userLevel };
        case "fail":
            return { ...state, token: null };
        default:
            throw new Error();
    }
};

const authContext = createContext();
const authContextDispatch = createContext();

const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(reducer, initialState);
    return (
        <authContext.Provider value={auth}>
            <authContextDispatch.Provider value={dispatch}>
                {children}
            </authContextDispatch.Provider>
        </authContext.Provider>
    );
};
  
const useAuthState = () => {
    return useContext(authContext);
};

const useAuthDispatch = () => {
    return useContext(authContextDispatch);
};

export { useAuthState, useAuthDispatch };
export default AuthProvider;
