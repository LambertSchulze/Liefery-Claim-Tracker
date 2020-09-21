import React, { useState } from 'react'
import ClaimsTable from './ClaimsTable'

const FilteredClaimsTable = ({ claims, setClaims }) => {
  const [showClosed, setShowClosed] = useState(true)
  
  const claimsToShow = showClosed ? claims : claims.filter(claim => claim.status !== 'geschlossen')

  return (
    <div>
      <button onClick={() => setShowClosed(!showClosed)}>
        geschlossene Claims {showClosed ? 'ausblenden' : 'anzeigen'}
      </button>
      <ClaimsTable claims={claimsToShow} setClaims={setClaims}/>
    </div>
  )
}

export default FilteredClaimsTable