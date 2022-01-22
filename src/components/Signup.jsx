import React, { useState } from 'react';
import '../stylesheets/login.css';

export const Signup = () => {

    const [usernameField, setUsernameField] = useState();
    const [displayNameField, setDisplayNameField] = useState();
    const [emailField, setEmailField] = useState();
    const [passwordField, setPasswordField] = useState();
    const [confirmPasswordField, setConfirmPasswordField] = useState();
    const [isPending, setIsPending] = useState(false);
    
    const Asterisk = () => {
        return <span style={{color: 'red'}}>*</span>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const user = {
            usernameField,
            displayNameField,
            emailField,
            passwordField,
            confirmPasswordField
        };
    }

    return (
        <div className='login'>
            <div className='flexbox-container'>
                <div className='login-panel'>
                    <div className='login-title-container'>
                        <h2 className='login-title'>Signup Panel</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username-field' className='field-label'>Username{Asterisk()}</label>
                        <input
                            // required
                            type='text'
                            className='field'
                            id='username-field'
                            name='username-field'
                            autoCapitalize='off'
                            autoCorrect='off'
                            pattern='[a-zA-Z0-9_.]{1,128}'
                            value={usernameField}
                            onChange={() => setUsernameField}
                        />
                        <div className='login-gap'></div>
                        <label htmlFor='display-name-field' className='field-label'>Display Name{Asterisk()}</label>
                        <input
                            // required
                            type='text'
                            className='field'
                            id='display-name-field'
                            name='display-name-field'
                            autoCorrect='off'
                            value={displayNameField}
                            onChange={() => setDisplayNameField}
                        />
                        <div className='login-gap'></div>
                        <label htmlFor='email-field' className='field-label'>Email Address{Asterisk()}</label>
                        <input
                            // required
                            type='email'
                            className='field'
                            id='email-field'
                            name='email-field'
                            autoCapitalize='off'
                            autoCorrect='off'
                            value={emailField}
                            onChange={() => setEmailField}
                        />
                        <div className='login-gap'></div>
                        <label htmlFor='password-field' className='field-label'>Password{Asterisk()}</label>
                        <input
                            // required 
                            type='password' 
                            className='field' 
                            id='password-field' 
                            name='password-field'
                            value={passwordField}
                            onChange={() => setPasswordField}
                        />
                        <div className='login-gap'></div>
                        <label htmlFor='confirm-password-field' className='field-label'>Confirm Password{Asterisk()}</label>
                        <input
                            // required
                            type='password'
                            className='field'
                            id='confirm-password-field'
                            name='confirm-password-field'
                            value={confirmPasswordField}
                            onChange={() => setConfirmPasswordField}
                        />
                        <div className='login-gap'></div>
                        <div className='login-button-container'>
                            <button disabled={isPending} className='login-button'>{isPending? 'Loading...':'Sign up'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
