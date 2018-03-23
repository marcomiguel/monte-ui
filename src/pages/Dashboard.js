import React, { Component } from 'react'
import SentriLayout from '../common/layout/Layout'
import CounterContainer from '../containers/CounterContainer'
import CasesContainer from '../containers/CasesContainer'

class Dashboard extends Component {
    render(){
        return (
            <SentriLayout>
                <CounterContainer/>
                <CasesContainer/>
            </SentriLayout>
        )
   } 
}

export default Dashboard