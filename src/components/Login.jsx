import React from 'react';
import '../stylesheets/login.css';

export const Login = () => {
    return (
        <div className='login'>
            <div className='flexbox-container'>
                <div className='login-panel'>
                    <div className='login-title-container'>
                        <h2 className='login-title'>Login Panel</h2>
                    </div>

                    <label for='login-field' className='field-label'>Username or Email Address</label>
                    <input type='text' className='field' id='login-field' name='login-field' autocapitalize='off' autocorrect='off'/>
                    <div className='login-gap'></div>
                    <label for='password-field' className='field-label'>Password</label>
                    <input type='password' className='field' id='password-field' name='password-field'/>
                    <div className='login-gap'></div>
                    <div className='login-button-container'>
                        <button className='login-button'>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
