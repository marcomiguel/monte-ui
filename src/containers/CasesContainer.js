import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCases } from '../redux/modules/cases'
import CasesComponent from '../components/CasesComponent'
import CasesSubmitComponent from '../components/CasesSubmitComponent'

class CasesContainer extends Component {
        
    componentDidMount() {
        this.props.getCases();
    }

    render() {
        let hrStyle = { display: 'block', height: '1px', border: '0', borderTop: '1px solid #dddddd', margin: '0', marginBottom: '32px', padding: '0' }
        return (
            <div className="wrapper">
                <CasesComponent {...this.props} />
                <hr style={hrStyle}/>
                <CasesSubmitComponent/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cases: state.cases.list
    }
}

export default connect(mapStateToProps, { getCases })(CasesContainer)