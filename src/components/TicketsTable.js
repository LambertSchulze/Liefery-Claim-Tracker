import React from 'react'
import { Link } from 'react-router-dom'

const TicketsTable = ({ tickets, setTickets, setErrorMessage }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => 
          <tr key={ticket.id}>
            <td><Link to={`/tickets/${ticket.id}`}>{ticket.id}</Link></td>
            <td>{ticket.status}</td>
            <td>{ticket.description}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default TicketsTable