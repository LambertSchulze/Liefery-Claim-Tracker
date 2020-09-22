import React from 'react'
import claimService from '../services/claims'

const ClaimsTable = ({ claims, setClaims }) => {
  
  const toggleClaimStatus = (id) => {
    const claim = claims.find((c => c.id === id))
    const changedClaim = { ...claim, status: claim.status === "geschlossen" ? "wieder geöffnet" : "geschlossen" }
    claimService
      .update(id, changedClaim)
      .then(res => {
        setClaims(claims.map(claim => claim.id !== id ? claim : res.data))
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