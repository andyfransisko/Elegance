import React from 'react'
import SecPic from '../img/sec-pic2.png'

class SectionSecond extends React.Component{
    render(){
        return(
            <section name = "second">
                <hr class="my-hr" />
                <div class="sec-container">
                    <div class="sec-question1 accent-font-color">
                        <b>
                            What is it for ?
                        </b>
                    </div>
                    <div class="sec-question2 accent-font-color">
                        <b>
                            Who is it for ?
                        </b>
                    </div>

                    <div class="sec-answer1 med-font-color">
                        This is a platform where everyone can freely
                        share their thoughts and share it with anyone
                        globally.
                    </div>
                    <div class="sec-answer2 med-font-color">
                        This is a free platform, 
                        everyone can use it without any additional charges.
                    </div>

                    <div class="sec-picture">
                        <img src= { SecPic } width="500px" />
                    </div>

                    <div class="sec-head1 third-font-color">
                        <b>
                            Get To Know Better!
                        </b>
                    </div>
                    <div class="sec-head2 med-font-color">
                        Feel free to share your thoughts or opinion
                        with anyone globally, or you can also read
                        and find related articles about your current
                        mind instantly! Express yourself with more
                        creative and different way with others
                        on the platform!
                    </div>
                    <div class="sec-button">
                        <button class="my-button">
                            Interested!
                        </button>
                    </div>

                </div>
            </section>
        )
    }
}

export default SectionSecond