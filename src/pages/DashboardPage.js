import React from 'react'
import { connect } from 'react-redux'

import ClaimList from '../components/ClaimList'

const DashboardPage = ({claims}) => (
    <main className="mdl-layout__content mdl-grid">
        <section className="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--12-col">
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Open Claims</h2>
            </div>
            <div className="mdl-card__media">
                {<ClaimList claims={claims}/>}
            </div>
        </section>
    </main>
)

const mapStateToProps = (state) => ({
    claims: state.claims.claims,
})

export default connect(mapStateToProps)(DashboardPage)