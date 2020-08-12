import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-light bg-danger navbar-expand-sm">
        <span className="navbar-brand">Claim Tracker</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/claims" className="nav-link">Claims</Link>
                </li>
            </ul>
        </div>
    </nav>
)