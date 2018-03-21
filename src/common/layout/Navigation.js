import React, { Component } from 'react'
import './Navigation.css'
import SimpleList from './NavigationItems'

class Navigation extends Component{

    constructor(){
        super()
        this.state = {
            showPanel: false
        }
    }

    toggle(){
        this.setState({ showPanel: !this.state.showPanel })    
    }

    render(){
        const { showPanel } = this.state
        return (
            <div className="navigation-wrapper">
                <button className="burger-menu" onClick={this.toggle.bind(this)}>
                    <span>toggle menu</span>    
                </button>
                <nav className={`navigation-panel ${ showPanel ? 'navigation-panel-open': '' }`}>
                    <SimpleList/>
                </nav>
            </div>
        )
    }
}

export default Navigation