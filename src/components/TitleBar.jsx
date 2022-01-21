import React from 'react';
import '../stylesheets/titlebar.css';
import logo from '../media/logo-no-shadow.png';
import { Link } from 'react-router-dom';

export const TitleBar = () => {
    return (
        <div className='titlebar'>
            <div className='flexbox-container'>
                <Link className='title-img-link' to='/'><img className='title-img' src={logo} /></Link>
                <div className='title-text-container'>
                    <Link className='title-text-link' to='/'><h3 className='title-text'>Rays</h3></Link>
                </div>
                <div className='title-login-container'>
                    <Link className='title-login' to='/login'><p className='title-login-text'>Log in</p></Link>
                </div>
                <div className='title-signup-container'>
                    <Link className='title-signup' to='/signup'><p className='title-signup-text'>Sign up</p></Link>
                </div>
            </div>
        </div>
    );
};
