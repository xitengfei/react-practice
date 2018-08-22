import React from 'react'
import { Link } from 'react-router-dom'

const Sider = () => (
    <div className="sider">
        <ul className="menus">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos/react-router">Repos</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/contacts">Repos</Link></li>
        </ul>
    </div>
)

export default Sider