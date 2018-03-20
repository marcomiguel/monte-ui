import React, { Component } from 'react'
import Navigation from './Navigation'
import './Header.css'
import logo from '../../assets/img/logo.png'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import NotificationsNoneIcon from 'material-ui-icons/NotificationsNone'
import Avatar from 'material-ui/Avatar';

class SentriHeader extends Component {
    render(){
        return (
            <header className="sentri-header">
                <Navigation/>
                <div className="sentri-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="sentri-divisor"></div>
                <div className="sentri-slogan">Intelligent Safety Platform</div>
                <div id="sentri-header-buttons">
                    <IconButton aria-label="Search">
                        <SearchIcon />
                    </IconButton>
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