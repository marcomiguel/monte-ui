import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CaseComponent from './CaseComponent'
import './CasesComponent.css'

const CasesComponent = props => (
    <div id="wrapper-cases">
        { props.cases.map( item => {
            return (
                <CaseComponent {...item} key={item.id}/>
            )
        }) }
    </div>
)

CasesComponent.propTypes = {
    cases: PropTypes.array.isRequired
}

export default CasesComponent