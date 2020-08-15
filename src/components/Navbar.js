import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <header className="mdl-layout__header mdl-layout__header--scroll">
        <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Claim Tracker</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
                <Link to="/" className="mdl-navigation__link">Home</Link>
                <Link to="/claims" className="mdl-navigation__link">Link</Link>
            </nav>
        </div>
    </header>
)
