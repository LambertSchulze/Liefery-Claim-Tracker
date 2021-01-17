import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ticketsService from './services/tickets'
import Notification from './components/Notification'
import NewTicket from './pages/NewTicket'
import SingleTicket from './pages/SingleTicket'
import Dashboard from './pages/Dashboard'

const App = () => {
  const [tickets, setTickets] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    ticketsService
      .getAll()
      .then(initialTickets => {
        setTickets(initialTickets)
      })
  }, [])

  return (
    <Router>
      <Notification message={errorMessage} />
      <main>
        <Switch>
          <Route path="/tickets/new">
            <NewTicket tickets={tickets} setTickets={setTickets} />
          </Route>
          <Route path="/tickets/:id">
            <SingleTicket tickets={tickets} setTickets={setTickets} />
          </Route>
          <Route path="/">
            <Dashboard tickets={tickets} setTickets={setTickets} setErrorMessage={setErrorMessage}/>
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App 