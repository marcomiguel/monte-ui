import React, { Component } from 'react'
import SentriLayout from '../common/layout/Layout'
import SentriCounter from '../common/layout/Counter'

class Dashboard extends Component {
    render(){
        return (
            <SentriLayout>
                <SentriCounter/>
            </SentriLayout>
        )
   } 
}

export default Dashboard