import React from 'react'

const ClaimList = () => (
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
            <tr>
                <td>1</td>
                <td className="mdl-data-table__cell--non-numeric">
                    <span className="mdl-chip mdl-color--light-green-500">
                        <span className="mdl-chip__text">Geöffnet</span>
                    </span>
                </td>
                <td className="mdl-data-table__cell--non-numeric">08.08.2020</td>
                <td className="mdl-data-table__cell--non-numeric">ABCDE-12345</td>
                <td className="mdl-data-table__cell--non-numeric">Paul Sänker</td>
                <td className="mdl-data-table__cell--non-numeric">
                    <button className="mdl-button mdl-js-button">View</button>
                </td>
            </tr>
        </tbody>
    </table>
)

export default ClaimList
