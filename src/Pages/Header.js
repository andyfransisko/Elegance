import React from 'react'
import Logo from '../img/logo.png';

function Header(){
    return(
        <header>
            <ul>
                <li class="logo">
                    <img src= { Logo } width="25px" />
                </li>
                <li >
                    <b> Inspiration </b>
                </li>
                <li>
                    <b> About </b>
                </li>
                <li>
                    <b> Contact </b>
                </li>
                <li class="shortcut-menu">
                    <span class="s-menu">
                        <div class="s-menu1"></div>
                        <div class="s-menu2"></div>
                        <div class="s-menu3"></div>
                        <div class="s-menu2"></div>
                    </span>
                    
                </li>
            </ul>
        </header>
    )
}

export default Header