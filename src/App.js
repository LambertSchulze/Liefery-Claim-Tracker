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

  const toggleClaimStatus = (id) => {
    console.log(id)
    const url = `http://localhost:3001/claims/${id}`
    const claim = claims.find((c => c.id === id))
    const changedClaim = { ...claim, status: claim.status === "geschlossen" ? "wieder geöffnet" : "geschlossen" }
  
    axios
      .put(url, changedClaim)
      .then(res => {
        setClaims(claims.map(claim => claim.id !== id ? claim : res.data))
      })
  }

  return (
    <div>
      <h1>Claims</h1>
      <FilteredClaimsTable claims={claims} toggleClaimStatus={toggleClaimStatus}/>
      <NewClaimForm claims={claims} setClaims={setClaims} />
    </div>
  )
}

export default App 