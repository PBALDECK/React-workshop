import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src="/wsf-logo.png" />
                </a>
                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>
                        <Link to="/post/new" className="navbar-item">
                            New post
                        </Link>
                        <Link to="/users/new" className="navbar-item">
                            New user
                        </Link>
                        <Link to="/users" className="navbar-item">
                            All users
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
