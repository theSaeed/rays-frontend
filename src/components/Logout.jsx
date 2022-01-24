import React, { useEffect, useCallback } from 'react';
import '../stylesheets/login.css';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch } from '../providers/AuthProvider';

export const Logout = () => {

    const authDispatch = useAuthDispatch();
    const navigate = useNavigate();

    useEffect( useCallback( async () => {
        authDispatch({ type: "logout" });
        navigate('/login');
    }))


    return (
        <>
        </>
    );
};
