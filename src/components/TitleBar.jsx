import React from 'react';
import '../stylesheets/titlebar.css';
import '../App.css';
import logo from '../media/logo-no-shadow.png';
import { Link } from 'react-router-dom';

export const TitleBar = () => {

    const isLoginButtonHidden = () => {
        if (window.location.pathname === '/login')
            return ' hidden';
        return '';
    }

    const isSignupButtonHidden = () => {
        if (window.location.pathname === '/signup')
            return ' hidden';
        return '';
    }

    return (
        <div className='titlebar'>
            <div className='flexbox-container'>
                <a className='title-img-link' href='/'><img className='title-img' src={logo} alt='Logo'/></a>
                <div className='title-text-container'>
                    <a className='title-text-link' href='/'><h3 className='title-text'>Rays</h3></a>
                </div>
                <div className={'title-login-container'+isLoginButtonHidden()}>
                    <a className='title-login' href='/login'><p className='title-login-text'>Log in</p></a>
                </div>
                <div className={'title-signup-container'+isSignupButtonHidden()}>
                    <a className='title-signup' href='/signup'><p className='title-signup-text'>Sign up</p></a>
                </div>
            </div>
        </div>
    );
};
