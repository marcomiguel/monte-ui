import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import './UserMenuComponent.css'

const BtnArrow = () => {
    const svg = `
        <svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="arrow_drop_down---material" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.539999962">
                <polygon fill="#000000" points="8 11 16.36 11 12.18 15.18"></polygon>
            </g>
        </svg>`
    return <span dangerouslySetInnerHTML={{__html: svg }} />
}

class UserMenuComponent extends Component {
    render(){
        return(
            <div id="sentri-user-menu">
                <Avatar className="sentri-avatar">N</Avatar>
                <div className="sentri-user-profile">
                    <div className="sentri-user-name">
                        <span>Nancy Steel</span>
                        <BtnArrow/>
                    </div>
                    <div className="sentri-user-rol">Case Manager</div>
                </div>
            </div>
        )
    }
}

export default UserMenuComponent