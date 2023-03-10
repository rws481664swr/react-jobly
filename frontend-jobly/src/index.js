import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalContextProvider} from "./context/GlobalContext";
import {CompanyContextProvider} from "./context/CompanyContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalContextProvider>
                    <CompanyContextProvider prePopulate={true}>
                        <App/>
                    </CompanyContextProvider>
            </GlobalContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
