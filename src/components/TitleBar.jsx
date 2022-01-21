import React from 'react';
import '../stylesheets/titlebar.css';
import logo from '../media/logo-no-shadow.png';

export const TitleBar = () => {
    return (
        <div className="titlebar">
            <div className="flexbox-container">
                <a className="title-img-link" href="/"><img className="title-img" src={logo} /></a>
                <div className="title-text-container">
                    <a className="title-text-link" href="/"><h3 className="title-text">Rays</h3></a>
                </div>
                <div className="title-login-container">
                    <a className="title-login" href="/login"><p className="title-login-text">Log In</p></a>
                </div>
                <div className="title-signup-container">
                    <a className="title-signup" href="/signup"><p className="title-signup-text">Sign Up</p></a>
                </div>
            </div>
        </div>
    );
};
