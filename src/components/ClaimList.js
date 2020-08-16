import React from 'react'
import { ClaimListRow } from '../components/ClaimListRow'

const ClaimList = ({claims}) => {
    return (
        <table className="mdl-data-table mdl-js-data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th className="mdl-data-table__cell--non-numeric">Status</th>
                    <th className="mdl-data-table__cell--non-numeric">Open Date</th>
                    <th className="mdl-data-table__cell--non-numeric">Liefery-ID</th>
                    <th className="mdl-data-table__cell--non-numeric">Courier Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {claims.map((claim) => <ClaimListRow key={claim.id} claim={claim} />)}
            </tbody>
        </table>
    )
}

export default ClaimList
