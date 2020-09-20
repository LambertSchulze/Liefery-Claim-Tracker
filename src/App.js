import React, { useState } from 'react'
import ClaimsTable from './components/ClaimsTable'
import NewClaimForm from './components/NewClaimForm'

const App = (props) => {
  const [claims, setClaims] = useState(props.claims)

  return (
    <div>
      <h1>Claims</h1>
      <ClaimsTable claims={claims} />
      <NewClaimForm claims={claims} setClaims={setClaims} />
    </div>
  )
}

export default App 