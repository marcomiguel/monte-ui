import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterComponent from '../components/CounterComponent'

class CounterContainer extends Component {
    render() {
        return (
                <CounterComponent {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cases: state.cases.list
    }
}

export default connect(mapStateToProps)(CounterContainer)