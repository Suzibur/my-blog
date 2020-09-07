import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Header;