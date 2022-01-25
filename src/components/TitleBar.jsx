import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAuthState } from '../providers/AuthProvider';
import '../stylesheets/titlebar.css';
import '../App.css';
import logo from '../media/logo-no-shadow.png';

export const TitleBar = ({ isLoggedIn }) => {

    const auth = useAuthState();
    const location = useLocation();

    const isLogoutButtonHidden = () => {
        if (!auth.token)
            return ' hidden';
        return '';
    }

    const isCreateButtonHidden = () => {
        console.log(auth.userLevel);
        if (!auth.token || auth.userLevel != 'admin')
            return ' hidden';
        return '';
    }

    const isLoginButtonHidden = () => {
        if (auth.token || location.pathname === '/login')
            return ' hidden';
        return '';
    }

    const isSignupButtonHidden = () => {
        if (auth.token || location.pathname === '/signup')
            return ' hidden';
        return '';
    }

    return (
        <div className='titlebar'>
            <div className='flexbox-container'>
                <Link className='title-img-link' to='/'><img className='title-img' src={logo} alt='Logo'/></Link>
                <div className='title-text-container'>
                    <Link className='title-text-link' to='/'><h3 className='title-text'>Rays</h3></Link>
                </div>
                <div className={'title-signup-container'+isCreateButtonHidden()}>
                    <Link className='title-signup' to='/create'><p className='title-signup-text'>Create</p></Link>
                </div>
                <div className={'title-login-container'+isLogoutButtonHidden()}>
                    <Link className='title-login' to='/logout'><p className='title-login-text'>Log out</p></Link>
                </div>
                <div className={'title-login-container'+isLoginButtonHidden()}>
                    <Link className='title-login' to='/login'><p className='title-login-text'>Log in</p></Link>
                </div>
                <div className={'title-signup-container'+isSignupButtonHidden()}>
                    <Link className='title-signup' to='/signup'><p className='title-signup-text'>Sign up</p></Link>
                </div>
            </div>
        </div>
    );
};
