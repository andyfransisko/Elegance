import React from 'react'
import AboutPic from '../img/team.png'
import MissionPic from '../img/mission.png'
import PeoplePic from '../img/people.png'

class AboutContent extends React.Component{
    render(){
        return(
            <section name = "about">
                <div className="about-container">
                    <div className="about-picture">
                        <img src= { AboutPic } className="standard-img-width2" alt="" />
                    </div>
                    <div className="about-head1 third-font-color">
                        <b>
                            Elegance.
                        </b>
                    </div>
                    <div className="about-head2 med-font-color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum ac est in porta. 
                        Quisque eu velit libero. Mauris libero nisl, molestie nec lacus sit amet, 
                        efficitur facilisis elit. Curabitur sed metus vehicula, imperdiet elit a, 
                        tempor felis. Curabitur sollicitudin bibendum massa quis rhoncus. Sed ligula ante, 
                        commodo sed finibus consequat, sagittis ut lectus. Pellentesque eu eros suscipit, 
                        ornare arcu bibendum, ultrices leo. Donec fermentum nisl at nibh tempus tempus. 
                    </div>

                    <div className="about-picture2">
                        <img src= { MissionPic } className="standard-img-width" alt="" />
                    </div>
                    <div className="about-info accent-font-color">
                        <b>
                            Values We Hold
                        </b>
                    </div>
                    <div className="about-info1">
                        <span className="about-info-font third-font-color">
                            <b>
                                Our Mission <br />
                            </b>
                        </span>
                        <span className="about-info-font2 med-font-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus condimentum ac est in porta. Quisque eu velit libero.
                        </span>
                    </div>
                    <div className="about-info2">
                        <span className="about-info-font third-font-color">
                            <b>
                                Our Essence <br />
                            </b>
                        </span>
                        <span className="about-info-font2 med-font-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus condimentum ac est in porta. Quisque eu velit libero.
                        </span>
                    </div>
                    <div className="about-info3">
                        <span className="about-info-font third-font-color">
                            <b>
                                Our Promise <br />
                            </b>
                        </span>
                        <span className="about-info-font2 med-font-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus condimentum ac est in porta. Quisque eu velit libero.
                        </span>
                    </div>
                    <div className="about-info4">
                        <span className="about-info-font third-font-color">
                            <b>
                                Our Vibe <br />
                            </b>
                        </span>
                        <span className="about-info-font2 med-font-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus condimentum ac est in porta. Quisque eu velit libero.
                        </span>
                    </div>

                    <div className="about-highlight-picture">
                        <img src= { PeoplePic } className="standard-img-width3" alt="" />
                    </div>
                    <div className="about-highlight third-font-color">
                        "Empathy is about standing in someone else's shoes, feeling with his 
                        or her heart, seeing with his or her eyes. Not only is empathy hard 
                        to outsource and automate, but it makes the world a better place."
                    </div>

                    <div className="about-stats1">
                        <span className="third-font-color about-stats-font1">
                          1000<br />  
                        </span>
                        <span className="accent-font-color about-stats-font2">       
                            <b>
                                Users Registered
                            </b>
                        </span>  
                    </div>
                    <div className="about-stats2">
                        <span className="third-font-color about-stats-font1">
                          5000<br />  
                        </span>
                        <span className="accent-font-color about-stats-font2">       
                            <b>
                                Post Shared
                            </b>
                        </span>  
                    </div>
                    <div className="about-stats3">
                        <span className="third-font-color about-stats-font1">
                          12000<br />  
                        </span>
                        <span className="accent-font-color about-stats-font2">       
                            <b>
                                Comments
                            </b>
                        </span> 
                    </div>
                    <div className="about-stats4">
                        <span className="third-font-color about-stats-font1">
                          1Mil+<br />  
                        </span>
                        <span className="accent-font-color about-stats-font2">       
                            <b>
                                Supports
                            </b>
                        </span> 
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutContent