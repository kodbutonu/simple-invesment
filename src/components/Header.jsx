import React from 'react';
import logo from "../assets/yatırım.png"
const Header = () => {
    return <header id='header'>
        <img src={logo} alt="" id='header img'/>
        <h1 id='h1'>Yatırım Hesaplama</h1>
    </header>
}

export default Header;
