// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/TasksPage';
import SprintsPage from './pages/SprintsPage';
import MilestonesPage from './pages/MilestonesPage';
import ProfilePage from './pages/ProfilePage';
import Mascot from './components/Mascot';


function App() {
  return (
      <Router>
          <div className="d-flex vh-100">
              <Sidebar />
              <div className="flex-grow-1 d-flex flex-column">
                  <AppNavbar />
                  <div className="container-fluid mt-4 flex-grow-1">
                      <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/tasks" element={<TasksPage />} />
                          <Route path="/sprints" element={<SprintsPage />} />
                          <Route path="/milestones" element={<MilestonesPage />} />
                          <Route path="/profile" element={<ProfilePage />} />
                      </Routes>
                  </div>
                  
              </div>
          </div>
      </Router>
  );
}

export default App;
