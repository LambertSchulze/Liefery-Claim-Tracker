import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const claims = [
  {
    id: 1,
    description: 'Empfänger meldet Nichterhalt',
    date: '2020-04-01T17:30:31.098Z',
    closed: true
  },
  {
    id: 2,
    description: 'Nachbar nicht bekannt',
    date: '2020-05-01T18:39:34.091Z',
    closed: false
  },
  {
    id: 3,
    description: 'Pünktlich liefern',
    date: '2020-06-01T19:20:14.298Z',
    closed: false
  }
]

ReactDOM.render(
  <App claims={claims} />,
  document.getElementById('root')
)