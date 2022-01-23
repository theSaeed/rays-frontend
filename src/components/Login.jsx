import React, { useState, useEffect } from 'react';
import '../stylesheets/login.css';
import { useNavigate } from 'react-router-dom';

export const Login = ({ handleLogin, isLoggedIn }) => {

    const [loginField, setLoginField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(null);
        setIsPending(true);
        
        const user = {
            loginField,
            passwordField,
        };

        fetch('https://rays-server.herokuapp.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(user)
        }).then(res => {
            console.log(res);
            if(res.status !== 200)
                throw res.json();
            return res.json();
        }).then(res => {
            handleLogin({
                token: res.token,
                displayName: res.displayName,
                email: res.email,
                userLevel: res.userLevel
            });
        }).then(() => {
            navigate('/');
            setIsPending(false);
        }).catch(err => {
            if (err.message)
                setMessage(err.message);
            else
                setMessage('Something went wrong. Please try again later.');
            setIsPending(false);
        })
    }

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
