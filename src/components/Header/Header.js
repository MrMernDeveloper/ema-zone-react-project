import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src={logo} alt="" />

            </div>
            <div>
                <NavLink className={({isActive})=> isActive ? 'active' : 'inactive'}to="/shop">Shop</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'inactive'} to="/orders">Orders </NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'inactive'} to="/inventory">Inventory</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'inactive'} to="/about">About</NavLink>
            </div>
      </nav>
    );
};

export default Header;