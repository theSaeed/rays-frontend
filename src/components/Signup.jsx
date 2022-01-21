import React from 'react';
import '../stylesheets/login.css';

export const Signup = () => {
    return (
        <div className='login'>
            <div className='flexbox-container'>
                <div className='login-panel'>
                    <div className='login-title-container'>
                        <h2 className='login-title'>Signup Panel</h2>
                    </div>

                    <label htmlFor='username-field' className='field-label'>Username</label>
                    <input type='text' className='field' id='username-field' name='username-field' autoCapitalize='off' autoCorrect='off'/>
                    <div className='login-gap'></div>
                    <label htmlFor='email-field' className='field-label'>Email Address</label>
                    <input type='text' className='field' id='email-field' name='email-field' autoCapitalize='off' autoCorrect='off'/>
                    <div className='login-gap'></div>
                    <label htmlFor='password-field' className='field-label'>Password</label>
                    <input type='password' className='field' id='password-field' name='password-field'/>
                    <div className='login-gap'></div>
                    <label htmlFor='confirm-password-field' className='field-label'>Confirm Password</label>
                    <input type='password' className='field' id='confirm-password-field' name='confirm-password-field'/>
                    <div className='login-gap'></div>
                    <div className='login-button-container'>
                        <button className='login-button'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
