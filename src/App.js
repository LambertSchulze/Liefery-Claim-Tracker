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
            </div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">New Claim</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create New Claim</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Liefery-ID</span>
                      </div>
                      <input type="text" className="form-control" placeholder="Liefery-ID" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Courier Name</span>
                      </div>
                      <input type="text" className="form-control" placeholder="Corier Full Name" />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Add</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
