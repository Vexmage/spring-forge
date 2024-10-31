// src/pages/SprintsPage.js
import React from 'react';

function SprintsPage() {
    return (
        <div>
            <h2>Sprints</h2>
            <p>Organize and track progress across each sprint.</p>
            <div className="sprint-placeholder">
                <h3>Sprint 1</h3>
                <p>Goal: Set up the basic project structure and deploy a working prototype.</p>
            </div>
            <div className="sprint-placeholder">
                <h3>Sprint 2</h3>
                <p>Goal: Integrate task management and complete the main dashboard functionality.</p>
            </div>
        </div>
    );
}

export default SprintsPage;
