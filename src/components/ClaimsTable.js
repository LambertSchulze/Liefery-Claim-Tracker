import React from 'react'

const ClaimsTable = ({ claims }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Deadline</th>
          <th>Status</th>
          <th>Sendungs-Link</th>
        </tr>
      </thead>
      <tbody>
        {claims.map(claim => 
          <tr key={claim.id}>
            <td>{claim.deadline}</td>
            <td>{claim.status}</td>
            <td>{claim.shipment.reference_code}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ClaimsTable