import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import router from './route/index.jsx'
import {Provider } from 'react-redux'
import {store} from './store/store.js'

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    // </StrictMode>
    
)
