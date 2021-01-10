import React from 'react'
import Header from './Header'
import ContactContent from './ContactContent'
import Footer from './Footer'

class Contact extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <ContactContent />
                <Footer />
            </div>
        )
    }
}

export default Contact