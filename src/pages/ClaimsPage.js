import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { loadClaimDatabank } from '../actions/claimsActions'
import { Claim } from '../components/Claim'

const ClaimsPage = ({ dispatch, loading, claims, hasErrors }) => {
    useEffect (() => { dispatch (loadClaimDatabank()) }, [dispatch])
    
    const renderClaim = () => {
        if (loading) return <p>Loading Claims...</p>
        if (hasErrors) return <p>Unable to display Claims.</p>
        return claims.map((claim) => <Claim key={claim.id} claim={claim} />)
    }

    return (
        <section className="container-fluid">
            <h1 className="mt-4">Claims</h1>
            {renderClaim()}
        </section>
    )
}

const mapStateToProps = (state) => ({
    loading: state.claims.loading,
    claims: state.claims.claims,
    hasErrors: state.claims.hasErrors,
})

export default connect(mapStateToProps)(ClaimsPage)
