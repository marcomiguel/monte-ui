import React, { Component } from 'react'
import SentriHeader from './Header'
import SentriFooter from './Footer'

class SentriLayout extends Component {
   render(){
    return (
        <div>
            <SentriHeader/>
            {this.props.children}
            <SentriFooter/>
        </div>
    )
   } 
}

export default SentriLayout