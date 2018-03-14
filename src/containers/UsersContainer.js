import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showUsers } from '../actions'
import UsersComponent from '../components/UsersComponent'

class UsersContainer extends Component {
        
    componentDidMount() {
        this.props.showUsers();
    }

    render() {
        return <UsersComponent {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.list
    }
}

export default connect(mapStateToProps, { showUsers })(UsersContainer)