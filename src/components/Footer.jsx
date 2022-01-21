import React from 'react';
import '../stylesheets/footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="flexbox-container">
                <div className="footer-copyright-container">
                    <p className="footer-copyright">Copywhat 2022 © Rays. No rights reserved.</p>
                </div>
                <div className="footer-date-container">
                    <p className="footer-date">January 2022</p>
                </div>
            </div>
        </div>
    );
};
