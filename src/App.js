import React, { useState, useEffect } from 'react'
import claimService from './services/claims'
import Notification from './components/Notification'
import FilteredClaimsTable from './components/FilteredClaimsTable'
import NewClaimForm from './components/NewClaimForm'

const App = () => {
  const [claims, setClaims] = useState([])
  const [errorMessage, setErrorMessage] = useState('Error!')

  useEffect(() => {
    claimService
      .getAll()
      .then(initialClaims => {
        setClaims(initialClaims)
      })
  }, [])

  return (
    <div>
      <h1>Claims</h1>
      <Notification message={errorMessage}/>
      <FilteredClaimsTable claims={claims} setClaims={setClaims} setErrorMessage={setErrorMessage}/>
      <NewClaimForm claims={claims} setClaims={setClaims} />
    </div>
  )
}

export default App 