import axios from 'axios'
import React from 'react'

const ClaimsTable = ({ claims, toggleClaimStatus }) => {
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