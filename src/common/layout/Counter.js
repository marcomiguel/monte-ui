import React, { Component } from 'react'
import './Counter.css'

class SentriCounter extends Component {

    state = {
        user: 'Nancy',
        newCases: 3,
        inProgressCases: 8
    }

    render(){
        const { user, newCases, inProgressCases } = this.state;
        return (
            <section className="counter">
                <div className="wrapper">
                    <p>Good Morning {user}</p>
                    <p>SENTRi has identified {newCases} new high-priority cases in addition to the in-progress cases from yesterday.</p>
                    <div className="counter-summary">
                        <div className="counter-summary-item">
                            <span className="number">{newCases}</span>
                            <span className="status">new cases</span>
                        </div>
                        <div className="counter-summary-item">
                            <span className="number">{inProgressCases}</span>
                            <span className="status">in progress</span>
                        </div>
                    </div>
                </div>
            </section>
        )
   } 
}

export default SentriCounter