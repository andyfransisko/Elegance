import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <section>
                <footer className="foot-container">
                    <div className="foot-location">
                        <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="foot-location-info third-font-color">
                        21 Valley Street<br />
                        <b>Jakarta, Indonesia</b>
                    </div>

                    <div className="foot-phone">
                    <i className="fa fa-phone"></i>
                    </div>
                    <div className="foot-phone-info third-font-color">
                        +6524 9012
                    </div>

                    <div className="foot-email">
                        <i className="fa fa-envelope"></i>
                    </div>
                    <div className="foot-email-info third-font-color">
                        support@elegance.com
                    </div>

                    <div className="foot-about third-font-color">
                        <b>
                            About The Company
                        </b>
                    </div>
                    <div className="foot-about-info med-font-color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur.
                    </div>
                    <div className="foot-about-socmed third-font-color">
                        <a href="http://www.instagram.com/andyfransisko" target="_blank">
                            <span className="fa fa-instagram"></span>
                        </a>
                        <a href="http://www.andyfransisko.com" target="_blank">
                            <span className="fa fa-twitter"></span>
                        </a>
                    </div>
                </footer>
            </section>
        )
    }
}

export default Footer