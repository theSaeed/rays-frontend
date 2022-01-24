import React, { useState, useEffect } from 'react';
import '../stylesheets/collections.css';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../providers/AuthProvider';
import { axiosIns } from "../utility/axios";

export const Collections = () => {

    const auth = useAuthState();

    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    useEffect( async () => {
        if(!auth.token)
            navigate('/login');

        setMessage(null);
        setIsPending(true);

        try{
            const res = await axiosIns.get('/getCollections');
            console.log(res);
            // if (res.status !== 200) {
            //     if (res.data.message)
            //         setMessage(res.data.message);
            //     else
            //         setMessage('Something went wrong. Please try again later.');
            //     setIsPending(false);
            //     authDispatch({ type: "fail" });
            //     return;
            // }
            // authDispatch({ type: "success", token: res.data.token });
            // navigate('/');
            // setIsPending(false);
        } catch (err) {
            console.log(err);
            setMessage('Something went wrong. Please try again later.');
            setIsPending(false);
        }
    }, [])

    return (
        <div className='collections-back'>
            <div className="flexbox-container">
                <div className='banner' style={{backgroundImage: 'linear-gradient(135deg, #A64DFF, #532680)'}}>
                    <h1>Collections</h1>
                </div>
                <div className='banner'>
                    Hollllllllllllllllllllllllllllllllllllllllllllllllly Whaaaaaaaaaaaaaaaaaat
                    Hollllllllllllllllllllllllllllllllllllllllllllllllly Whaaaaaaaaaaaaaaaaaat
                    Hollllllllllllllllllllllllllllllllllllllllllllllllly Whaaaaaaaaaaaaaaaaaat
                </div>
            </div>
            {/* <div className='flexbox-container'>
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
                            <p style={{color: '#f05'}}>{message}</p>
                        </>}
                        <div className='login-gap'></div>
                        <div className='login-button-container'>
                            <button disabled={isPending} className='login-button'>{isPending? 'Loading...':'Sign up'}</button>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    );
};
