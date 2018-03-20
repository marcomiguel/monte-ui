import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

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
                    <ul>
                        <li><Link to="/todo">All Cases</Link></li>
                        <li><Link to="/users">History</Link></li>
                        <li><Link to="/dashboard">Help Center</Link></li>
                        <li><Link to="/dashboard">My Links</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation