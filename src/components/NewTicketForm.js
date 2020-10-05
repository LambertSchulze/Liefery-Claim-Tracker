import React, { useState } from 'react'
import ticketsService from '../services/tickets'

const NewTicketForm = ({ tickets, setTickets }) => {

  const [newTicketDescription, setNewTicketDescription] = useState('')
  
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
        setNewTicketDescription('')
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