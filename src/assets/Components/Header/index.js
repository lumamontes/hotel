import React from 'react';
import { Link } from 'react-router-dom';

function Header (props) {
    return (
        <header id="header-container">
             <div className="logo-container">
                {/* <img src={} alt=""/> */}         
            </div>

             <div className="header-content">
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
            </div>
        </header>
        )
}

export default Header;