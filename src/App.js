import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilteredClaimsTable from './components/FilteredClaimsTable'
import NewClaimForm from './components/NewClaimForm'

const App = () => {
  const [claims, setClaims] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/claims')
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