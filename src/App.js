import React from 'react';

function App() {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Dashboard</h1>
        <div className="card mb-4">
          <div className="card-header">
          <i className="fas fa-table mr-1"></i>
            Claims
          </div>
          <div className="card-body">
            <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
            </div>
          <button type="button" className="btn btn-primary">New Claim</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
