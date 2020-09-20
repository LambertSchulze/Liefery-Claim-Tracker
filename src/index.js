import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const claims = [
  {
    id: 1,
    open_date: '2020-04-01',
    category: 'Claim',
    description_internally: 'Empfänger meldet Nichterhalt',
    deadline: '2020-04-03',
    status: 'geschlossen',
    shipment: {
      id: 123456,
      reference_code: 'ABCDE-12345'
    }
  },
  {
    id: 2,
    open_date: '2020-05-01',
    category: 'Claim',
    description_internally: 'Nachbar nicht bekannt',
    deadline: '2020-05-03',
    status: 'an DL übergeben',
    shipment: {
      id: 123457,
      reference_code: '12345-ABCDE'
    }
  },
  {
    id: 3,
    open_date: '2020-06-01',
    category: 'Claim',
    description_internally: 'Pünktlich liefern',
    deadline: '2020-06-02',
    status: '1. Erinnerung',
    shipment: {
      id: 123458,
      reference_code: '54321-AMBCN'
    }
  }
]

ReactDOM.render(
  <App claims={claims} />,
  document.getElementById('root')
)