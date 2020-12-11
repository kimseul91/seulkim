import React from 'react';
import "./Nav.css"

const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <li className="nav-list">Home</li>
                <li className="nav-list">About</li>
                <li className="nav-list">Blog</li>
            </ul>
        </div>
    );
};

export default Nav;