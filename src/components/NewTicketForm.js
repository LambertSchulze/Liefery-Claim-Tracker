import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ticketsService from '../services/tickets'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'


const NewTicketForm = ({ tickets, setTickets }) => {
  const [newTicketDescription, setNewTicketDescription] = useState('')
  const history = useHistory()

  const addTicket = (event) => {
    event.preventDefault()
    
    const newTicketObject = {
      status: 'geöffnet',
      description: newTicketDescription,
      log: []
    }
    ticketsService
      .create(newTicketObject)
      .then(returnedTicket => {
        setTickets(tickets.concat(returnedTicket))
        history.push('/')
      })
  }

  const handleNewTicketDescriptionChange = (event) => {
    setNewTicketDescription(event.target.value)
  }

  return (
    <form onSubmit={addTicket}>
      <Input placeholder="Description" value={newTicketDescription} onChange={handleNewTicketDescriptionChange} />

      <Button type="reset" onClick={() => history.goBack()}>cancel</Button>
      <Button type="submit">create Ticket</Button>
    </form>
  )
}

export default NewTicketForm