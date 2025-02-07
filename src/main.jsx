import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from "./store/store";

import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Kopplar Redux till appen */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>,
)
