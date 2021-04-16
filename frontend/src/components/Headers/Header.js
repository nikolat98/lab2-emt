import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <nav>
            <div className="nav__links">
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/books">Books</NavLink>
                
            </div>
        </nav>
    )
}

export default Header
