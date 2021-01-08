import React from 'react'
import MainPic from '../img/main-pic.jpeg';

class MainContent extends React.Component{
    render(){
        return(
            <section name="first">
                <div class="container">
                    <div class="first-picture">
                        <img src= { MainPic } width="300px" />
                    </div>

                    <div class="first-head font-size1 third-font-color">
                        <b>
                            Elegance.
                        </b>
                    </div>

                    <div class="first-head2">
                        <span class="accent-font-color first-head2-font-size1">
                            <b>
                                01
                            </b>
                        </span>
                        <span class="low-font-color first-head2-font-size2">
                            <b>
                                /04
                            </b>
                        </span>
                    </div>

                    <div class="first-head3 med-font-color">
                        The art of art, the glory 
                        of expression, and the 
                        sunshine of the light 
                        of letters, is simplicity.
                    </div>

                    <div class="first-socmed">
                        <span class="fa fa-instagram"></span>
                        <span class="fa fa-twitter"></span>
                    </div>

                    <div class="first-bullet">
                        <span class="dot dot-active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="first-copy low-font-color">
                        &copy; 2020
                    </div>
                </div>
            </section>

        )
        
    }
}

export default MainContent