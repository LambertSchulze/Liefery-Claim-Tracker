import React from 'react'
import { useParams } from 'react-router-dom'

const SingleTicketView = ({ tickets }) => {
  const id = useParams().id
  const ticket = tickets.find (t => t.id === Number(id))

  return (
    <div>
      <p>{ticket.id}</p>
      <p>{ticket.description}</p>
      <p>{ticket.status}</p>
      <ul>
        {ticket.log.map((l, index) =>
          <li key={index}>{l.note} - {l.user}</li>
        )}
      </ul>
    </div>
  )
}

export default SingleTicketView