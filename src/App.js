import React, { useState, useEffect } from 'react'
import claimService from './services/claims'
import FilteredClaimsTable from './components/FilteredClaimsTable'
import NewClaimForm from './components/NewClaimForm'

const App = () => {
  const [claims, setClaims] = useState([])

  useEffect(() => {
    claimService
      .getAll()
      .then(res => {
        setClaims(res.data)
      })
  }, [])

  return (
    <div>
      <h1>Claims</h1>
      <FilteredClaimsTable claims={claims} setClaims={setClaims}/>
      <NewClaimForm claims={claims} setClaims={setClaims} />
    </div>
  )
}

export default App 