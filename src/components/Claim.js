import React from 'react'

const Claim = ({ claim }) => {
  return (
    <li>
      {claim.description}<br />
      {claim.openDate}<br />
      {claim.closed ? 'geschlossen' : 'in Bearbeitung'}
    </li>
  )
}

export default Claim