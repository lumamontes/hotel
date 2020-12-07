import React, { Component } from 'react';
import Logo from '../../images/logo.jpg'
import Button from '../Button';
import { MenuItems } from './MenuItens';

import './style.css'

class Header extends Component {
    state= { clicked: false}
    handleClick = () => {
     this.setState({ clicked: !this.state.clicked })                   
    }

    render () {
        return (
            <nav className="NavbarItems">
                 <div className="logo-container">
                    <img src={Logo} alt="Hotel Brasil"/>         
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
  
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}                
                </ul>
                <Button class="navButton" action="Reservar"></Button>
            </nav>

        )
    }
    
}

export default Header;