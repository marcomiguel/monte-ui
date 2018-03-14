import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UsersComponent = props => (
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
                            <td><Link to={`/user/${user.id}`}>{user.id}</Link></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
    </div>
)

UsersComponent.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersComponent