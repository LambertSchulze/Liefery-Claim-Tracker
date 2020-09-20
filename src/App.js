import React from 'react'
import ClaimTable from './components/ClaimTable'

const App = ({ claims }) => {
  return (
    <div>
      <h1>Claims</h1>
      <ClaimTable claims={claims} />
    </div>
  )
}

export default App 