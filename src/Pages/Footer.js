import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <section>
                <footer class="foot-container">
                    <div class="foot-location">
                        <i class="fa fa-map-marker"></i>
                    </div>
                    <div class="foot-location-info third-font-color">
                        21 Valley Street<br />
                        <b>Jakarta, Indonesia</b>
                    </div>

                    <div class="foot-phone">
                    <i class="fa fa-phone"></i>
                    </div>
                    <div class="foot-phone-info third-font-color">
                        +6524 9012
                    </div>

                    <div class="foot-email">
                        <i class="fa fa-envelope"></i>
                    </div>
                    <div class="foot-email-info third-font-color">
                        support@elegance.com
                    </div>

                    <div class="foot-about third-font-color">
                        <b>
                            About The Company
                        </b>
                    </div>
                    <div class="foot-about-info med-font-color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur.
                    </div>
                    <div class="foot-about-socmed third-font-color">
                        <a href="http://www.instagram.com/andyfransisko" target="_blank">
                            <span class="fa fa-instagram"></span>
                        </a>
                        <a href="http://www.andyfransisko.com" target="_blank">
                            <span class="fa fa-twitter"></span>
                        </a>
                    </div>
                </footer>
            </section>
        )
    }
}

export default Footer