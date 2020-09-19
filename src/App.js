import React from 'react'
import Claim from './components/Claim'

const App = ({ claims }) => {
  return (
    <div>
      <h1>Claims</h1>
      <ul>
        {claims.map(claim => 
          <Claim key={claim.id} claim={claim}/>
        )}
      </ul>
    </div>
  )
}

export default App 