import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import ClaimPage from './pages/ClaimPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/claims" component={ClaimsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
