import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './ReduxH/store.js'  // import store     #2
import { Provider } from 'react-redux'     // import provider  #2
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>      {/*   #2  */}
    <App />
    </Provider>
  </StrictMode>,
)
