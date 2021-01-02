import React from 'react'
import './App.css'
import Header from './Pages/Header'
import MainContent from './Pages/MainContent'
import Footer from './Pages/Footer'

class App extends React.Component{
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

export default App