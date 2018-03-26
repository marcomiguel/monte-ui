import React, { Component } from 'react'
import Navigation from './Navigation'
import './Header.css'
import logo from '../../assets/img/logo.png'
import config from '../../config.json'
import SearchComponent from '../components/search/SearchComponent.js'
import NotificationsComponent from '../components/notifications/NotificationsComponent.js'
import UserMenuComponent from '../components/user/UserMenuComponent.js'

class SentriHeader extends Component {
    render(){
        let title = `${config.app.name} | ${config.app.description}`
        return (
            <header className="sentri-header">
                <div id="sentri-header-info">
                    <Navigation/>
                    <div className="sentri-logo">
                        <a href="/">
                            <img src={logo} alt={title} title={title}/>
                        </a>
                    </div>
                    <div className="sentri-divisor"></div>
                    <div className="sentri-slogan">{config.app.description}</div>
                </div>
                <div id="sentri-header-buttons">
                    <SearchComponent/>
                    <NotificationsComponent/>
                    <UserMenuComponent/>
                </div>
            </header>
        )
   } 
}

export default SentriHeader