import React, { useState } from 'react';
import '../stylesheets/login.css';

export const Login = () => {

    const [loginField, setLoginField] = useState();
    const [passwordField, setPasswordField] = useState();
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const user = {
            loginField,
            passwordField,
        };
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
