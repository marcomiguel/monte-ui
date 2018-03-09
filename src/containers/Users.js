import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showUsers } from '../actions'
import ListUsers from '../components/ListUsers'

class Users extends Component {
    
    constructor(){
        super()
    }
    
    componentDidMount() {
        this.props.showUsers();
        console.log(this.props);
    }

    render() {
        return <ListUsers {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.list
    }
}

export default connect(mapStateToProps, { showUsers })(Users)