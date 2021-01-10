import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'

class Header extends React.Component{

    constructor(){
        super()
        this.state = {
            scroll: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrolled)
    }

    scrolled = () => {
        if (window.scrollY >= 120) {
            this.setState({
                scroll: true
            });
        }else{
            this.setState({
                scroll: false
            });
        }    
    }

    render(){

        const navbarScroll = {
            borderBottom: ""
        }

        if(this.state.scroll){
            navbarScroll.borderBottom= "1px solid #f09035"
        }
        else{
            navbarScroll.borderBottom=""
        }

        return(    
            <header className="navbar" style={navbarScroll}>
                <ul>
                    <li>
                        <Link to = "/">
                            <span>
                                <img src= { Logo } width="25px" alt="LOGO"/>
                            </span>
                        </Link>
                        
                    </li>
                    <li >
                        <Link to = "/">
                            <span className="underlined-effect">
                                <b> Inspiration </b>
                            </span> 
                        </Link>
                        
                    </li>
                    <li>
                        <Link to = "/About">
                            <span className="underlined-effect">
                                <b> About </b>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to = "/Contact">
                            <span className="underlined-effect">
                                <b> Contact </b>
                            </span>
                        </Link>
                    </li>
                    <li className="shortcut-menu">
                        <span className="s-menu">
                            <div className="s-menu1"></div>
                            <div className="s-menu2"></div>
                            <div className="s-menu3"></div>
                            <div className="s-menu2"></div>
                        </span>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header