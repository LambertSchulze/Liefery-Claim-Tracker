import React, { useState } from 'react'
import TicketsTable from './TicketsTable'

const FilteredTicketsTable = ({ tickets, setTickets, setErrorMessage }) => {

  const [showClosed, setShowClosed] = useState(true)  
  const ticketsToShow = showClosed ? tickets : tickets.filter(ticket => ticket.status !== 'geschlossen')

  return (
    <div>
      <button onClick={() => setShowClosed(!showClosed)}>
        geschlossene Claims {showClosed ? 'ausblenden' : 'anzeigen'}
      </button>
      <TicketsTable tickets={ticketsToShow} setTickets={setTickets} setErrorMessage={setErrorMessage} />
    </div>
  )
}

export default FilteredTicketsTable