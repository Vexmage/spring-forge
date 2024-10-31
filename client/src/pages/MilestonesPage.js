// src/pages/MilestonesPage.js
import React from 'react';

function MilestonesPage() {
    return (
        <div>
            <h2>Milestones</h2>
            <p>Track your major project milestones here.</p>
            <div className="milestone-placeholder">
                <h3>Alpha Release</h3>
                <p>Goal: Complete all core features for initial testing.</p>
                <p>Status: In Progress</p>
            </div>
            <div className="milestone-placeholder">
                <h3>Beta Release</h3>
                <p>Goal: Fix bugs and polish features for beta testing.</p>
                <p>Status: Planned</p>
            </div>
        </div>
    );
}

export default MilestonesPage;
