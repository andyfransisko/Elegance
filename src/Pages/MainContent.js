import React from 'react'
import SectionFirst from './SectionFirst'
import SectionSecond from './SectionSecond'

class MainContent extends React.Component{
    render(){
        return(
            <div>
                <SectionFirst />
                <SectionSecond />  
            </div>
        )
        
    }
}

export default MainContent