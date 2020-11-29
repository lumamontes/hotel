import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg'
import { FaBars } from 'react-icons/fa';

import './style.css'

function Header (props) {
    return (
        <header id="header-container">
             <div className="logo-container">
                <img src={Logo} alt="Hotel Brasil"/>         
            </div>

             <div className="header-content">
                    <Link to="/">Quem somos</Link>
                    <Link to="/">Quartos</Link>
                    <Link to="/">Galeria</Link>
                    <Link to="/">Contatos</Link>
            </div>
            <FaBars className="menu-bars"></FaBars>

        </header>
        )
}

export default Header;