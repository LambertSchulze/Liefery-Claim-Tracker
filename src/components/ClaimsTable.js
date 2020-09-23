import React from 'react'
import claimService from '../services/claims'

const ClaimsTable = ({ claims, setClaims, setErrorMessage }) => {
  
  const toggleClaimStatus = (id) => {
    const claim = claims.find((c => c.id === id))
    const changedClaim = { ...claim, status: claim.status === "geschlossen" ? "wieder geöffnet" : "geschlossen" }
    claimService
      .update(id, changedClaim)
      .then(initialClaims => {setClaims(claims.map(claim => claim.id !== id ? claim : initialClaims))})
      .catch(error => {
        setErrorMessage(`the claim '${claim.id}' was deleted`)
        setTimeout(() => {setErrorMessage(null)}, 5000)
        setClaims(claims.filter(c => c.id !== id))
      })
}

  return (
    <table>
      <thead>
        <tr>
          <th>Deadline</th>
          <th>Status</th>
          <th>Sendungs-Link</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {claims.map(claim => 
          <tr key={claim.id}>
            <td>{claim.deadline}</td>
            <td>{claim.status}</td>
            <td>{claim.shipment.reference_code}</td>
            <td>
              <button onClick={() => toggleClaimStatus(claim.id)}>
                {claim.status === 'geschlossen' ? 'wieder öffnen' : 'Claim schließen'}
              </button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ClaimsTable