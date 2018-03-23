import React, { Component } from 'react'
import Navigation from './Navigation'
import './Header.css'
import logo from '../../assets/img/logo.png'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import NotificationsNoneIcon from 'material-ui-icons/NotificationsNone'
import Avatar from 'material-ui/Avatar';
import config from '../../config.json'
import SearchComponent from '../components/search/SearchComponent.js'

class SentriHeader extends Component {
    render(){
        return (
            <header className="sentri-header">
                <Navigation/>
                <div className="sentri-logo">
                    <img src={logo} alt={`${config.app.name} | ${config.app.description}`} />
                </div>
                <div className="sentri-divisor"></div>
                <div className="sentri-slogan">{config.app.description}</div>
                <div id="sentri-header-buttons">
                    <SearchComponent/>
                    <IconButton aria-label="Search">
                        <NotificationsNoneIcon />
                    </IconButton>
                    <Avatar className="sentri-avatar">M</Avatar>
                </div>
            </header>
        )
   } 
}

export default SentriHeader