import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarDrawer = () => (
    <div class="mdl-layout__drawer">
        <span className="mdl-layout-title">Claim Tracker</span>
        <nav className="mdl-navigation">
            <Link to="/" className="mdl-navigation__link">Home</Link>
            <Link to="/claims" className="mdl-navigation__link">Link</Link>
        </nav>
    </div>
)