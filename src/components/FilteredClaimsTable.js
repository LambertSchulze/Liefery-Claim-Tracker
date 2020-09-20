import React, { useState } from 'react'
import ClaimsTable from './ClaimsTable'

const FilteredClaimsTable = ({ claims }) => {
  const [showClosed, setShowClosed] = useState(true)
  
  const claimsToShow = showClosed ? claims : claims.filter(claim => claim.status !== 'geschlossen')

  return (
    <div>
      <button onClick={() => setShowClosed(!showClosed)}>
        geschlossene Claims {showClosed ? 'anzeigen' : 'ausblenden'}
      </button>
      <ClaimsTable claims={claimsToShow} />
    </div>
  )
}

export default FilteredClaimsTable