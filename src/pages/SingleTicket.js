import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ticketServices from '../services/tickets'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const SingleTicket = ({ tickets, setTickets }) => {
  const id = useParams().id
  const ticket = tickets.find (t => t.id === Number(id))
  const [newLog, setNewLog] = useState({
    log: '',
    state: null
  })
  const history = useHistory()
  const classes = useStyles()

  const postCommentary = (event) => {
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
        history.push('/')
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
    <Container>
      <h2>Claim Nr. {ticket.id}</h2>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">ID</TableCell>
                  <TableCell>{ticket.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Description</TableCell>
                  <TableCell>{ticket.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Status</TableCell>
                  <TableCell>{ticket.status}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Platzhalter</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Platzhalter</Paper>
        </Grid>
      </Grid>
      
      <h3>Kommentare</h3>
      <TableContainer component="Paper">
        <Table className={classes.table}>
            {ticket.log.map((l, index) =>
              <TableRow key={index}>
                <TableCell>{l.user}</TableCell>
                <TableCell>{l.note}</TableCell>
              </TableRow>
            )}
        </Table>
      </TableContainer>

      <form onSubmit={postCommentary}>
        <TextField name="log" label="Kommentar" multiline rowsMax={4} value={newLog.log} onChange={handleChange} />
        <Button variant="contained" color="primary" type="submit">abschicken</Button>
      </form>
    </Container>
  )
}

export default SingleTicket