import React from 'react'
import ReactDOM from 'react-dom'
import Store from 'store/store'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
      <Store>
          <App />
      </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
