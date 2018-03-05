import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// initial state of the board
const fields = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

ReactDOM.render(<App fields={fields} />, document.getElementById('root'))
registerServiceWorker()
