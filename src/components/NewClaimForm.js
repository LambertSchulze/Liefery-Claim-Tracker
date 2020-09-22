import React, { useState } from 'react'
import claimService from '../services/claims'

const NewClaimForm = ({ claims, setClaims }) => {

  const newClaimInitialValue = 'Reference Code of Shipment'
  const [newClaim, setNewClaim] = useState(newClaimInitialValue)
  
  const addClaim = (event) => {
    event.preventDefault()
    const newClaimObject = {
      open_date: new Date().toDateString(),
      status: 'geöffnet',
      shipment: {
        reference_code: newClaim
      }
    }
    claimService
      .create(newClaimObject)
      .then(res => {
        setClaims(claims.concat(res.data))
        setNewClaim(newClaimInitialValue)
      })
  }

  const handleNewClaimChange = (event) => {
    setNewClaim(event.target.value)
  }

  return (
    <form onSubmit={addClaim}>
      <input value={newClaim} onChange={handleNewClaimChange}/>
      <button type="submit">add Claim</button>
    </form>
  )
}

export default NewClaimForm