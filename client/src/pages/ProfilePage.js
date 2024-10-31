// src/pages/ProfilePage.js
import React from 'react';

function ProfilePage() {
    return (
        <div>
            <h2>Profile & Mascot Customization</h2>
            <p>Update your profile information and customize Sparky here.</p>
            <div className="profile-placeholder">
                <h3>Account Information</h3>
                <p>Name: John Doe</p>
                <p>Email: johndoe@example.com</p>
            </div>
            <div className="mascot-customization-placeholder">
                <h3>Customize Sparky</h3>
                <p>Select Sparky’s color, accessories, and personality.</p>
            </div>
        </div>
    );
}

export default ProfilePage;
