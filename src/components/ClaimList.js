import React from 'react'

const ClaimList = () => (
    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
        <thead>
            <tr>
                <th>ID</th>
                <th>Open Date</th>
                <th>Liefery-ID</th>
                <th>Courier Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>08.08.2020</td>
                <td>ABCDE-12345</td>
                <td>Paul Sänker</td>
                <td>
                  <button type="button" className="btn btn-outline-primary btn-sm mx-1">Edit</button>
                  <button type="button" className="btn btn-outline-primary btn-sm mx-1">Close</button>
                </td>
            </tr>
        </tbody>
    </table>
)

export default ClaimList
