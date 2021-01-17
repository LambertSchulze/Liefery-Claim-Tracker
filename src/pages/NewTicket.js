import React from 'react'
import NewTicketForm from '../components/NewTicketForm'
import Container from '@material-ui/core/Container'

const NewTicket = ({ tickets, setTickets }) => {
  return (
    <Container>
      <h2>New Ticket</h2>
      <NewTicketForm tickets={tickets} setTickets={setTickets}/>
    </Container>
  )
}

export default NewTicket