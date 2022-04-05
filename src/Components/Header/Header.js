import React from 'react';
import logo from '../../images/logo.png'
import '../Header/Header.css'
const Header = () => {
    return (
        <nav className='header bg-secondary d-flex align-items-center justify-content-between navbar navbar-expand-lg'>
            <a className='d-flex align-items-center nav-link text-white ms-0 ms-md-5' href="#home">
                <img src={logo} alt="" />
                <p className='fs-4 ms-3'>Great Buy</p>
            </a>
            <div className='d-flex me-5 navbar'>
                <a className='nav-link text-white' href="#Shop">Shop</a>
                <a className='nav-link text-white' href="#Order">Order</a>
                <a className='nav-link text-white' href="#About">About</a>
            </div>
        </nav>
    );
};

export default Header;