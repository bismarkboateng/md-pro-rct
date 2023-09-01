import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css";
import { BrowserRouter } from "react-router-dom"
import { ModalContextProvider } from './store/modal-context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ModalContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ModalContextProvider>
)
