import React, { useState, useEffect, useCallback } from 'react';
import '../stylesheets/login.css';
import { useNavigate } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../providers/AuthProvider';
import { axiosIns } from "../utility/axios";

export const Login = () => {

    const [loginField, setLoginField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const auth = useAuthState();
    const authDispatch = useAuthDispatch();

    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = useCallback( async (e) => {
        e.preventDefault();
        setMessage(null);
        setIsPending(true);
        
        const user = {
            loginField,
            passwordField,
        };

        try{
            const res = await axiosIns.post('https://rays-server.herokuapp.com/login', user);
            console.log(res);
            if (res.status !== 200) {
                if (res.data.message)
                    setMessage(res.data.message);
                else
                    setMessage('Something went wrong. Please try again later.');
                setIsPending(false);
                authDispatch({ type: "fail" });
                return;
            }
            authDispatch({ type: "success", token: res.data.token });
            navigate('/');
            setIsPending(false);
        } catch (err) {
            console.log(err);
            if (err.response) {
                setMessage(err.response.data.message);
            } else {
                setMessage('Something went wrong. Please try again later.');
            }
            authDispatch({ type: "fail" });
            setIsPending(false);
        }
    })

    useEffect(() => {
        if(auth.token)
            navigate('/');
    }, [])


    return (
        <div className='login'>
            <div className='flexbox-container'>
                <div className='login-panel'>
                    <div className='login-title-container'>
                        <h2 className='login-title'>Login Panel</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor='login-field' className='field-label'>Email Address</label>
                        <input
                            required
                            type='email'
                            className='field'
                            id='login-field'
                            name='login-field'
                            autoCapitalize='off'
                            autoCorrect='off'
                            value={loginField}
                            onChange={(e) => setLoginField(e.target.value)}
                        />
                        <div className='login-gap'></div>
                        <label htmlFor='password-field' className='field-label'>Password</label>
                        <input
                            required
                            type='password'
                            className='field'
                            id='password-field'
                            name='password-field'
                            value={passwordField}
                            onChange={(e) => {setPasswordField(e.target.value)}}
                        />
                        {message && <>
                            <div className='login-gap'></div>
                            <p style={{color: '#f05'}}>{message}</p>
                        </>}
                        <div className='login-gap'></div>
                        <div className='login-button-container'>
                            <button disabled={isPending} className='login-button'>{isPending? 'Loading...':'Log in'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
