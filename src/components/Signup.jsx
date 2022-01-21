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

                    <label for='username-field' className='field-label'>Username</label>
                    <input type='text' className='field' id='username-field' name='username-field' autocapitalize='off' autocorrect='off'/>
                    <div className='login-gap'></div>
                    <label for='email-field' className='field-label'>Email Address</label>
                    <input type='text' className='field' id='email-field' name='email-field' autocapitalize='off' autocorrect='off'/>
                    <div className='login-gap'></div>
                    <label for='password-field' className='field-label'>Password</label>
                    <input type='password' className='field' id='password-field' name='password-field'/>
                    <div className='login-gap'></div>
                    <label for='confirm-password-field' className='field-label'>Confirm Password</label>
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
