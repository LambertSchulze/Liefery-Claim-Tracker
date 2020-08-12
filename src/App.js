import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import DashboardPage from './pages/DashboardPage'
import ClaimsPage from './pages/ClaimsPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/claims" component={ClaimsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
