import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src={logo} alt="" />

            </div>
            <div>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
      </nav>
    );
};

export default Header;