import React from 'react'

export const ClaimListRow = ({claim}) => (
    <tr>
        <td>{claim.claimID}</td>
        <td className="mdl-data-table__cell--non-numeric">
            <span className="mdl-chip mdl-color--light-green-500">
                <span className="mdl-chip__text">{claim.status}</span>
            </span>
        </td>
        <td className="mdl-data-table__cell--non-numeric">{claim.openDate}</td>
        <td className="mdl-data-table__cell--non-numeric">{claim.lieferyID}</td>
        <td className="mdl-data-table__cell--non-numeric">{claim.courierName}</td>
        <td className="mdl-data-table__cell--non-numeric">
            <button className="mdl-button mdl-js-button">View</button>
        </td>
    </tr>
)