import React, { Component } from 'react'
import './CounterComponent.css'

class CounterComponent extends Component {

    state = {
        user: 'Nancy',
        newCases: 3,
        inProgressCases: 8
    }

    render(){
        const { user, newCases, inProgressCases } = this.state;
        const { cases } = this.props;
        return (
            <section className="counter">
                <div className="wrapper">
                    <div className="greeting">Good Morning {user}</div>
                    <div className="info">SENTRi has identified { cases.length } new high-priority cases in addition to the in-progress cases from yesterday.</div>
                    <div className="counter-summary">
                        <div className="counter-summary-item">
                            <span className="number">{ cases.length }</span>
                            <span className="status">new cases</span>
                        </div>
                        <div className="counter-summary-item">
                            <span className="number">{ inProgressCases }</span>
                            <span className="status">in progress</span>
                        </div>
                    </div>
                </div>
            </section>
        )
   } 
}

export default CounterComponent