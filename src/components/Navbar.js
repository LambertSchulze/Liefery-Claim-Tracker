import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">Claim Tracker</span>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <Link to="/" className="mdl-navigation__link">Home</Link>
                    <Link to="/claims" className="mdl-navigation__link">Link</Link>
                </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span className="mdl-layout-title">Claim Tracker</span>
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <Link to="/" className="mdl-navigation__link">Home</Link>
                    <Link to="/claims" className="mdl-navigation__link">Link</Link>
                </nav>
        </div>
    </div>
)
