import React, { Component } from 'react'
import SentriHeader from './Header'
import SentriFooter from './Footer'

class SentriLayout extends Component {
   render(){
    return (
        <div>
            <SentriHeader/>
            <div>{this.props.children}</div>
            <SentriFooter/>
        </div>
    )
   } 
}

export default SentriLayout