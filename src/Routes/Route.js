import React from 'react'
import { Switch, Route} from 'react-router-dom'

import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Main from '../Pages/Main'


export default function Routes(){
    return(
        <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />

            <Route component={Main} />
        </Switch>
    )
}