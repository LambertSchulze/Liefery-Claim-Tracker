import React, { useState } from 'react'
import FilteredClaimsTable from './components/FilteredClaimsTable'
import NewClaimForm from './components/NewClaimForm'

const App = (props) => {
  const [claims, setClaims] = useState(props.claims)

  return (
    <div>
      <h1>Claims</h1>
      <FilteredClaimsTable claims={claims} />
      <NewClaimForm claims={claims} setClaims={setClaims} />
    </div>
  )
}

export default App 