import React from 'react'
import MainPic from '../img/main-pic.jpeg'

class SectionFirst extends React.Component{

    constructor(){
        super()
        this.state={
            headerText: 'The art of art, the glory of expression, and the sunshine of the light of letters, is simplicity.',
            headerNumber: "01"
        }
    }

    changeText(){
        let count = 0
        let wordsArray = [  "The art of art, the glory of expression, and the sunshine of the light of letters, is simplicity.", 
                            "Gamma", 
                            "Delta", 
                            "Alpha"]
        let numberArray = ["01","02","03","04"]
        setInterval(() => {
            count++;
            this.setState(prevState => {
                return {
                    headerText: wordsArray[count % wordsArray.length],
                    headerNumber: numberArray[count % wordsArray.length]
                }
            })
        }, 7000);
    }

    render(){

        const dotActive = {
            backgroundColor: "var(--accent-color)",
            height: "10px",
            width: "10px",
            transition: "1.5s"
        }

        return(
            <section name="first" onLoad= {() => this.changeText()}>
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
                                {this.state.headerNumber}
                            </b>
                        </span>
                        <span class="low-font-color first-head2-font-size2">
                            <b>
                                /04
                            </b>
                        </span>
                    </div>

                    <div class="first-head3 med-font-color">
                        {this.state.headerText}
                    </div>

                    <div class="first-socmed">
                        <a href="http://www.instagram.com/andyfransisko" target="_blank">
                            <span class="fa fa-instagram"></span>
                        </a>
                        <a href="http://www.andyfransisko.com" target="_blank">
                            <span class="fa fa-twitter"></span>
                        </a>
                    </div>

                    <div class="first-bullet">
                        <span class="dot" style={this.state.headerNumber === '01' ? dotActive : null}></span>
                        <span class="dot" style={this.state.headerNumber === '02' ? dotActive : null}></span>
                        <span class="dot" style={this.state.headerNumber === '03' ? dotActive : null}></span>
                        <span class="dot" style={this.state.headerNumber === '04' ? dotActive : null}></span>
                    </div>

                    <div class="first-copy low-font-color">
                        &copy; 2020
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionFirst  