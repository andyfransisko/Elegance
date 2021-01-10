import React from 'react'
import Header from './Header'
import AboutContent from './AboutContent'
import Footer from './Footer'

class About extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <AboutContent />
                <Footer />
            </div>
        )
    }
}

export default About