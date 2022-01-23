import React, { useState, useEffect } from 'react';
import '../stylesheets/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = ({ handleLogin, isLoggedIn }) => {

    const [loginField, setLoginField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setIsPending(true);
        
        const user = {
            loginField,
            passwordField,
        };

        try{
            const res = await axios.post('https://rays-server.herokuapp.com/login', user);
            console.log(res);
            if (res.status !== 200) {
                if (res.data.message)
                    setMessage(res.data.message);
                else
                    setMessage('Something went wrong. Please try again later.');
                setIsPending(false);
                return;
            }
            handleLogin({
                id: res.data.id,
                token: res.data.token,
                displayName: res.data.displayName,
                email: res.data.email,
                userLevel: res.data.userLevel
            });
            navigate('/');
            setIsPending(false);
        } catch (err) {
            console.log(err);
            if (err.response) {
                setMessage(err.response.data.message);
            } else {
                setMessage('Something went wrong. Please try again later.');
            }
            setIsPending(false);
        }
    }

    useEffect(() => {
        if(isLoggedIn)
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
