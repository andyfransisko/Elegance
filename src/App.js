import React from 'react'
import './App.css'

import { Router } from 'react-router-dom'
import history from './Services/history'
import Routes from './Routes/Route'

class App extends React.Component{
  render(){
    return(
        <Router history={history}>
          <Routes />
        </Router>
    )
  }
}

export default App