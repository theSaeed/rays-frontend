import React, { useState } from 'react';
import '../stylesheets/login.css';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

    const [displayNameField, setDisplayNameField] = useState();
    const [emailField, setEmailField] = useState();
    const [passwordField, setPasswordField] = useState();
    const [confirmPasswordField, setConfirmPasswordField] = useState();
    
    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const Asterisk = () => {
        return <span style={{color: '#f05'}}>*</span>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setIsPending(true);

        if (passwordField !== confirmPasswordField) {
            setMessage('Repeat the password correctly.');
            setIsPending(false);
            return;
        }
        
        const user = {
            displayNameField,
            emailField,
            passwordField,
        };

        fetch('https://rays-server.herokuapp.com/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(user)
        }).then(res => {
            return res.json();
        }).then(res => {
            console.log(res);
            if(res.status !== 201) {
                setMessage(res.message);
                setIsPending(false);
                return;
            }
            navigate('/');
        }).catch(err => {
            setMessage('Something went wrong. Please try again later.');
            setIsPending(false);
        })
    }

    return (
        <div className='login'>
            <div className='flexbox-container'>
                <div className='login-panel'>
                    <div className='login-title-container'>
                        <h2 className='login-title'>Signup Panel</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='display-name-field' className='field-label'>Display Name{Asterisk()}</label>
                        <input
                            required
                            type='text'
                            className='field'
                            id='display-name-field'
                            name='display-name-field'
                            autoCorrect='off'
                            value={displayNameField}
                            onChange={(e) => setDisplayNameField(e.target.value)}
                        />
                        <div className='login-gap'></div>
                        <label htmlFor='email-field' className='field-label'>Email Address{Asterisk()}</label>
                        <input
                            required
                            type='email'
                            className='field'
                            id='email-field'
                            name='email-field'
                            autoCapitalize='off'
                            autoCorrect='off'
                            value={emailField}
                            onChange={(e) => setEmailField(e.target.value)}
                        />
                        <div className='login-gap'></div>
                        <label htmlFor='password-field' className='field-label'>Password{Asterisk()}</label>
                        <input
                            required 
                            type='password' 
                            className='field' 
                            id='password-field' 
                            name='password-field'
                            value={passwordField}
                            onChange={(e) => setPasswordField(e.target.value)}
                        />
                        <div className='login-gap'></div>
                        <label htmlFor='confirm-password-field' className='field-label'>Confirm Password{Asterisk()}</label>
                        <input
                            required
                            type='password'
                            className='field'
                            id='confirm-password-field'
                            name='confirm-password-field'
                            value={confirmPasswordField}
                            onChange={(e) => setConfirmPasswordField(e.target.value)}
                        />
                        {message && <>
                            <div className='login-gap'></div>
                            <p style={{color: '#f05', 'font-weight': '100'}}>{message}</p>
                        </>}
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
