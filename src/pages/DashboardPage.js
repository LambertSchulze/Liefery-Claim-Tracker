import React from 'react'
import { Link } from 'react-router-dom'

import ClaimList from '../components/ClaimList'
import NewClaimModal from '../components/NewClaimModal'

const DashboardPage = () => (
    <main>
        <div className="container-fluid">
            <h1 className="mt-4">Dashboard</h1>

            {/* CARD CLAIMLIST */}
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table mr-1"></i>
                    Claims
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <ClaimList />
                    </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">New Claim</button>
                <NewClaimModal />
                </div>
            </div>
        </div>
    </main>
)

export default DashboardPage