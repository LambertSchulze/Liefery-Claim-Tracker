import React, { useState } from 'react'
import claimService from '../services/claims'

const NewClaimForm = ({ claims, setClaims }) => {

  const newClaimInitialValue = ''
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
      .then(initialClaims => {
        setClaims(claims.concat(initialClaims))
        setNewClaim(newClaimInitialValue)
      })
  }

  const handleNewClaimChange = (event) => {
    setNewClaim(event.target.value)
  }

  return (
    <form onSubmit={addClaim}>
      <fieldset>
        <legend>betroffene Sendung</legend>
        <label>Liefery ID: 
          <input value={newClaim} onChange={handleNewClaimChange} />
        </label>
        <br/>
        <label>Stadt:
          <input />
        </label>
        <br/>
        <label>Kurier:
          <input />
        </label>
        <br/>
        <label>Kurierfirma:
          <input />
        </label>
      </fieldset>

      <label>Beschreibung: 
        <textarea type="text" />
      </label>
      <br/>
      <label>Kategorie: 
        <select>
          <option>Claim</option>
          <option>Beschwerde</option>
          <option>Fahrer-Fail</option>
        </select>
      </label>
      <br/>
      <label>Frist: 
        <input list="Fristen"/>
        <datalist id="Fristen">
          <option>24</option>
          <option>36</option>
          <option>48</option>
        </datalist>
      </label>
      <br/>
      <button type="submit">add Claim</button>
    </form>
  )
}

export default NewClaimForm