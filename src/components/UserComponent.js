import React from 'react'
import PropTypes from 'prop-types'

const UserComponent = props => (
    <div>
        <p>Name: {props.name}</p>
        <p>Mail: {props.mail}</p>
    </div>
)

UserComponent.propTypes = {
    name: PropTypes.String,
    mail: PropTypes.String
}

export default UserComponent

