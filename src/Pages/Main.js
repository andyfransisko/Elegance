import React from 'react'
import '../App.css'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

class Main extends React.Component{
  render(){
    return(
        <div>
          <Header />
          <MainContent />
          <Footer />
        </div>   
    )
  }
}

export default Main