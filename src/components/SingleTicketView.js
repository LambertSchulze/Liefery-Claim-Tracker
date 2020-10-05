import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ticketServices from '../services/tickets'

const SingleTicketView = ({ tickets, setTickets }) => {
  const id = useParams().id
  const ticket = tickets.find (t => t.id === Number(id))
  const [newLog, setNewLog] = useState({
    log: '',
    state: null
  })
  const history = useHistory()

  const updateTicket = (event) => {
    event.preventDefault()
    const updatedTicket = {
      ...ticket,
      log: ticket.log.concat({
        note: newLog.log
      })
    }
    ticketServices
      .update(id, updatedTicket)
      .then(returnedTicket => {
        setTickets(tickets.map(ticket => ticket.id !== id ? ticket : returnedTicket))
        history.push('/tickets')
      })
  }

  const handleChange = (event) => {
    event.preventDefault()
    const target = event.target
    const name = target.name
    const value = target.value
    setNewLog({
      [name]: value
    })
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{ticket.id}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{ticket.description}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{ticket.status}</td>
          </tr>
        </tbody>
      </table>
      <ul>
        {ticket.log.map((l, index) =>
          <li key={index}>{l.note} - {l.user}</li>
        )}
      </ul>
      <form onSubmit={updateTicket}>
        <textarea name="log" value={newLog.log} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default SingleTicketView