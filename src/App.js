import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import ticketsService from './services/tickets'
import Notification from './components/Notification'
import FilteredTicketsTable from './components/FilteredTicketsTable'
import NewTicketsForm from './components/NewTicketForm'
import SingleTicketView from './components/SingleTicketView'

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
            <NewTicketsForm tickets={tickets} setTickets={setTickets} />
          </Route>
          <Route path="/tickets/:id">
            <SingleTicketView tickets={tickets} setTickets={setTickets} />
          </Route>
          <Route path="/tickets">
            <FilteredTicketsTable tickets={tickets} setTickets={setTickets} setErrorMessage={setErrorMessage} />
            <Link to="/tickets/new">New Ticket</Link>
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