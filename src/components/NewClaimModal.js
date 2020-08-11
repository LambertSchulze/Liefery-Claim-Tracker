import React from 'react'

const NewClaimModal = () => (
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
)

export default NewClaimModal
