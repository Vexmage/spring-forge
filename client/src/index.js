// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import { MascotProvider } from './context/MascotContext';
import { SprintProvider } from './context/SprintContext';  // Import SprintProvider

ReactDOM.render(
    <TaskProvider>
        <SprintProvider>
            <MascotProvider>
                <App />
            </MascotProvider>
        </SprintProvider>
    </TaskProvider>,
    document.getElementById('root')
);
