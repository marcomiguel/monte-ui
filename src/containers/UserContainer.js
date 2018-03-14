import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions'
// import UserComponent from '../components/UserComponent'

class UserContainer extends Component {
        
    componentDidMount() {
        // this.props.getUser(3);
    }

    render() {
        return <div>lalalal</div>
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.selected
    }
}

export default connect(mapStateToProps, { getUser })(UserContainer)