


import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className ="header">
           <img src={logo} alt=""/>
           <nav>
               <div className="nav-left">
        <a href="/shop">Shop</a>
        <a href="/order-review">Order Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
        </div>
    </nav>
        </div>
   
    );
};

export default Header;