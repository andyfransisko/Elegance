import React from 'react'
import AboutPic from '../img/team.png'
import MissionPic from '../img/mission.png'
import PeoplePic from '../img/people.png'

class AboutContent extends React.Component{
    render(){
        return(
            <section name = "about-first">
                <div class="about-container">
                    <div class="about-picture">
                        <img src= { AboutPic } width="550px" />
                    </div>
                    <div class="about-head1 third-font-color">
                        <b>
                            Elegance.
                        </b>
                    </div>
                    <div class="about-head2 med-font-color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum ac est in porta. 
                        Quisque eu velit libero. Mauris libero nisl, molestie nec lacus sit amet, 
                        efficitur facilisis elit. Curabitur sed metus vehicula, imperdiet elit a, 
                        tempor felis. Curabitur sollicitudin bibendum massa quis rhoncus. Sed ligula ante, 
                        commodo sed finibus consequat, sagittis ut lectus. Pellentesque eu eros suscipit, 
                        ornare arcu bibendum, ultrices leo. Donec fermentum nisl at nibh tempus tempus. 
                    </div>

                    <div class="about-picture2">
                        <img src= { MissionPic } width="500px" />
                    </div>
                    <div class="about-info accent-font-color">
                        <b>
                            Values We Hold
                        </b>
                    </div>
                    <div class="about-info1">
                        <span class="about-info-font third-font-color">
                            <b>
                                Our Mission <br />
                            </b>
                        </span>
                        <span class="about-info-font2 med-font-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus condimentum ac est in porta. Quisque eu velit libero.
                        </span>
                    </div>
                    <div class="about-info2">
                        <span class="about-info-font third-font-color">
                            <b>
                                Our Essence <br />
                            </b>
                        </span>
                        <span class="about-info-font2 med-font-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus condimentum ac est in porta. Quisque eu velit libero.
                        </span>
                    </div>
                    <div class="about-info3">
                        <span class="about-info-font third-font-color">
                            <b>
                                Our Promise <br />
                            </b>
                        </span>
                        <span class="about-info-font2 med-font-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus condimentum ac est in porta. Quisque eu velit libero.
                        </span>
                    </div>
                    <div class="about-info4">
                        <span class="about-info-font third-font-color">
                            <b>
                                Our Vibe <br />
                            </b>
                        </span>
                        <span class="about-info-font2 med-font-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus condimentum ac est in porta. Quisque eu velit libero.
                        </span>
                    </div>

                    <div class="about-highlight-picture">
                        <img src= { PeoplePic } width="600px" />
                    </div>
                    <div class="about-highlight third-font-color">
                        "Empathy is about standing in someone else's shoes, feeling with his 
                        or her heart, seeing with his or her eyes. Not only is empathy hard 
                        to outsource and automate, but it makes the world a better place."
                    </div>

                    <div class="about-stats1">
                        <span class="third-font-color about-stats-font1">
                          1000<br />  
                        </span>
                        <span class="accent-font-color about-stats-font2">       
                            <b>
                                Users Registered
                            </b>
                        </span>  
                    </div>
                    <div class="about-stats2">
                        <span class="third-font-color about-stats-font1">
                          5000<br />  
                        </span>
                        <span class="accent-font-color about-stats-font2">       
                            <b>
                                Post Shared
                            </b>
                        </span>  
                    </div>
                    <div class="about-stats3">
                        <span class="third-font-color about-stats-font1">
                          12000<br />  
                        </span>
                        <span class="accent-font-color about-stats-font2">       
                            <b>
                                Comments
                            </b>
                        </span> 
                    </div>
                    <div class="about-stats4">
                        <span class="third-font-color about-stats-font1">
                          1Mil+<br />  
                        </span>
                        <span class="accent-font-color about-stats-font2">       
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