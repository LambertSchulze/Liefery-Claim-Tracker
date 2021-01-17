import React from 'react'
import { Link } from 'react-router-dom'
import FilteredTicketsTable from '../components/FilteredTicketsTable'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

const Dashboard = ({ tickets, setTickets, setErrorMessage }) => {
  return (
    <Container>
      <h2>Dashboard</h2>

{/* Place for more Cards with Stats */}

      <FilteredTicketsTable tickets={tickets} setTickets={setTickets} setErrorMessage={setErrorMessage}/>
      <Link to="/tickets/new">
        <Button variant="contained" color="primary">New Ticket</Button>
      </Link>
    </Container>
  )
}

export default Dashboard