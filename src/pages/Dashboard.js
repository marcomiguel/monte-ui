import React, { Component } from 'react'
import SentriLayout from '../common/layout/Layout'
import SentriCounter from '../common/layout/Counter'
import CasesContainer from '../containers/CasesContainer'

class Dashboard extends Component {
    render(){
        return (
            <SentriLayout>
                <SentriCounter/>
                <CasesContainer/>
            </SentriLayout>
        )
   } 
}

export default Dashboard