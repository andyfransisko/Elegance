import React from 'react'
import Logo from '../img/logo.png';

function Header(){
    return(
        
        <header>
            <ul>
                <li>
                    <a href="#">
                        <img src= { Logo } width="25px" />
                    </a>
                </li>
                <li >
                    <a href="#" class="underlined-effect">
                        <b> Inspiration </b>
                    </a>
                </li>
                <li>
                    <a href="#" class="underlined-effect">
                        <b> About </b>
                    </a>
                </li>
                <li>
                    <a href="#" class="underlined-effect">
                        <b> Contact </b>
                    </a>
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