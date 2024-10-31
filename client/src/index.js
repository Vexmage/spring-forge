// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import { MascotProvider } from './context/MascotContext';

ReactDOM.render(
    <TaskProvider>
        <MascotProvider>
            <App />
        </MascotProvider>
    </TaskProvider>,
    document.getElementById('root')
);
