import React from 'react'
import QuestionPic from '../img/questions.png'

class ContactContent extends React.Component{
    render(){

        return(
            <section name="contact">
                <div className="contact-container">
                    <div className="contact-head accent-font-color">
                        <b>
                            Questions ?
                        </b>
                    </div>
                    <div className="contact-head2 med-font-color">
                        Feel free to ask us by filling bellow
                    </div>
                    <div className="contact-picture">
                        <img src= { QuestionPic } width="500px" alt=""/>
                    </div>

                    <div className="contact-fill1">
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="contact-fill2">
                        <input type="text" placeholder="Your Email" />
                    </div>
                    <div className="contact-fill3">
                        <textarea placeholder="Your Message">

                        </textarea>
                    </div>
                    <div className="contact-fill4">
                        <span>
                            <a href="http://www.instagram.com/andyfransisko" target="_blank" rel="noreferrer">
                                <span className="fa fa-instagram"></span>
                            </a>
                            <a href="http://www.andyfransisko.com" target="_blank" rel="noreferrer">
                                <span className="fa fa-twitter"></span>
                            </a>
                        </span>
                        
                        <button className="my-button1">
                            SEND
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactContent