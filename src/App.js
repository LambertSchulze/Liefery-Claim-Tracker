import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { NavbarDrawer } from './components/NavbarDrawer'
import DashboardPage from './pages/DashboardPage'
import ClaimsPage from './pages/ClaimsPage'

const App = () => {
    return (
        <Router>
            <div className="mdl-layout mdl-js-layout">
                <Navbar />
                <NavbarDrawer />
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route exact path="/claims" component={ClaimsPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default App
