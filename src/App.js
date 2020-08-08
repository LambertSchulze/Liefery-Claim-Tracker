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
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">New Claim</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create New Claim</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Liefery-ID</span>
                      </div>
                      <input type="text" class="form-control" placeholder="Liefery-ID" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Courier Name</span>
                      </div>
                      <input type="text" class="form-control" placeholder="Corier Full Name" />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Add</button>
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
