import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css";
import { BrowserRouter } from "react-router-dom"
import { AppContextProvider } from './store/app-context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppContextProvider>
)
