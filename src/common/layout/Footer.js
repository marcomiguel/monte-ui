import React, { Component } from 'react'
import './Footer.css'

class SentriFooter extends Component {
    render(){
        return (
            <footer className="sentri-footer">
                <div className="wrapper wrapper-footer">
                    <span className="sentri-sentri">
                        SENTRi
                    </span>
                    <span className="sentri-confidential">
                        Confidential information for the sole benefit and use of PwC’s client. Sentri name is for demonstration purposes only. ©2017 PwC
                    </span>
                </div>
            </footer>
        )
    } 
}

export default SentriFooter