import React, { useState } from 'react'
import ClaimsTable from './components/ClaimsTable'

const App = (props) => {
  const [claims, setClaims] = useState(props.claims)

  return (
    <div>
      <h1>Claims</h1>
      <ClaimsTable claims={claims} />
    </div>
  )
}

export default App 