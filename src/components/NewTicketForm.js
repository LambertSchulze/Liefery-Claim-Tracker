import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ticketsService from '../services/tickets'

const NewTicketForm = ({ tickets, setTickets }) => {
  const [newTicketDescription, setNewTicketDescription] = useState('')
  const history = useHistory()

  const addTicket = (event) => {
    event.preventDefault()
    
    const newTicketObject = {
      status: 'geöffnet',
      description: newTicketDescription
    }
    
    ticketsService
      .create(newTicketObject)
      .then(initialTickets => {
        setTickets(tickets.concat(initialTickets))
        history.push('/tickets')
      })
  }

  const handleNewTicketDescriptionChange = (event) => {
    setNewTicketDescription(event.target.value)
  }

  return (
    <form onSubmit={addTicket}>
      <fieldset>
        <legend>Neuer Claim</legend>
        <label>Description 
          <input value={newTicketDescription} onChange={handleNewTicketDescriptionChange} />
        </label>
      </fieldset>
      <button type="submit">add Claim</button>
    </form>
  )
}

export default NewTicketForm