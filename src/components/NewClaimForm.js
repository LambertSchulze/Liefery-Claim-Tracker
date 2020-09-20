import React, { useState } from 'react'

const NewClaimForm = ({ claims, setClaims }) => {
  const [newClaim, setNewClaim] = useState('Reference Code of Shipment')
  
  const addClaim = (event) => {
    event.preventDefault()

    const newClaimObject = {
      id: claims.length + 1,
      open_date: new Date().toDateString(),
      status: 'geöffnet',
      shipment: {
        reference_code: newClaim
      }
    }

    setClaims(claims.concat(newClaimObject))
    setNewClaim('Reference Code of Shipment')
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