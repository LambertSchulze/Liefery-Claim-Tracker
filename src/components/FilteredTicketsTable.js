import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import FilterListIcon from '@material-ui/icons/FilterList'

const FilteredTicketsTable = ({ tickets, setTickets, setErrorMessage }) => {

  const [showClosed, setShowClosed] = useState(true)  
  const ticketsToShow = showClosed ? tickets : tickets.filter(ticket => ticket.status !== 'geschlossen')

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status
              <Tooltip title="geschlossene Tickets ausblenden"><IconButton onClick={() => setShowClosed(!showClosed)} aria-label="filter list"><FilterListIcon /></IconButton></Tooltip>
            </TableCell>
            <TableCell>Description</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ticketsToShow.map(ticket => 
            <TableRow hover key={ticket.id}>
              <TableCell>{ticket.id}</TableCell>
              <TableCell><Chip label={ticket.status} /></TableCell>
              <TableCell>{ticket.description}</TableCell>
              <TableCell><Link to={`/tickets/${ticket.id}`}><Button color="primary">View</Button></Link></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FilteredTicketsTable