import React from 'react';

function App() {
  return (
    <main>
      <div class="container-fluid">
        <h1 class="mt-4">Dashboard</h1>
        <div class="card mb-4">
          <div class="card-header">
          <i class="fas fa-table mr-1"></i>
            Claims
          </div>
          <div class="card-body">
            <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Open Date</th>
                        <th>Liefery-ID</th>
                        <th>Courier Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>08.08.2020</td>
                        <td>ABCDE-12345</td>
                        <td>Paul Sänker</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}

export default App;
