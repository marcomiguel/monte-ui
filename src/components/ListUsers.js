import React from 'react'
import PropTypes from 'prop-types'

const ListUsers = props => {
    return (
        <div>
            <h2>Lista usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { props.users.map( user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            )
        }) }
                </tbody>
            </table>
        </div>
    )
}

ListUsers.propTypes = {
    users: PropTypes.array.isRequired
}

export default ListUsers