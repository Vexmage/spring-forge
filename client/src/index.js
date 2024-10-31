// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MascotProvider } from './context/MascotContext';

ReactDOM.render(
    <MascotProvider>
        <App />
    </MascotProvider>,
    document.getElementById('root')
);
