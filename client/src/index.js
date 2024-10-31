// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import { MascotProvider } from './context/MascotContext';
import { SprintProvider } from './context/SprintContext';
import { MilestoneProvider } from './context/MilestoneContext';


ReactDOM.render(
  <TaskProvider>
      <SprintProvider>
          <MascotProvider>
              <MilestoneProvider>
                  <App />
              </MilestoneProvider>
          </MascotProvider>
      </SprintProvider>
  </TaskProvider>,
  document.getElementById('root')
);
