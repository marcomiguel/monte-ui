import React, { Component } from 'react'
import Navigation from './Navigation'
import Logo from './Logo'
import Divisor from './Divisor'
import './Header.css'

class SentriHeader extends Component {
    render(){
        return (
            <header className="sentri-header">
                <Navigation/>
                <Logo/>
                <Divisor/>
                <div className="sentri-slogan">Intelligent Safety Platform</div>
            </header>
        )
   } 
}

export default SentriHeader