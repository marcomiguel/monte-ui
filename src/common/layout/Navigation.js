import React from 'react'
import { Link } from 'react-router-dom'
import BurgerMenu from '../../common/components/BurgerMenu'
import './Navigation.css'

const Navigation = () => (
    <div>
        <BurgerMenu/>
        <nav className="navigation-panel">
            <ul>
                <li><Link to="/todo">Todo</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    </div>
)

export default Navigation