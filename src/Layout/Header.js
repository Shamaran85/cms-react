import React from 'react';
import './Header.css';

import Social from '../Header/Social';
import Contact from '../Header/Contact';
import Logo from '../Header/Logo';
import Navbar from '../Header/Navbar';

const header = () => {
    return (
        <div className="header">
            <div className="top-header-outter">
                <div className="top-header-inner">
                    <Social />
                    <Contact />
                </div>
            </div>
            <div className="bottom-header-outter">
                <div className="bottom-header-inner">
                    <Logo />
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default header;
