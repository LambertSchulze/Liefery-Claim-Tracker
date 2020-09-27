import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import claimService from './services/claims'
import Notification from './components/Notification'
import FilteredClaimsTable from './components/FilteredClaimsTable'
import NewClaimForm from './components/NewClaimForm'

const App = () => {
  const [claims, setClaims] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    claimService
      .getAll()
      .then(initialClaims => {
        setClaims(initialClaims)
      })
  }, [])

  return (
    <Router>
      <Notification message={errorMessage} />
      <main>
        <Switch>
          <Route path="/claim/new">
            <NewClaimForm claims={claims} setClaims={setClaims} />
          </Route>
          <Route path="/claims">
            <FilteredClaimsTable claims={claims} setClaims={setClaims} setErrorMessage={setErrorMessage} />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App 