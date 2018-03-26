import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import NotificationsNoneIcon from 'material-ui-icons/NotificationsNone'
import './NotificationsComponent.css'

class NotificationsComponent extends Component {
    render(){
        return(
            <div id="sentri-notifications">
                <IconButton aria-label="Notifications">
                    <NotificationsNoneIcon />
                </IconButton>
            </div>
        )
    }
}

export default NotificationsComponent