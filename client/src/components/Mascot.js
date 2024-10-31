// src/components/Mascot.js
import React, { useContext } from 'react';
import { MascotContext } from '../context/MascotContext';
import sparkyImage from '../assets/sparky.png'; // Import the image

function Mascot() {
    const { message } = useContext(MascotContext);

    return (
        <div className="mascot">
            <img src={sparkyImage} alt="Sparky the Dungeon Dog" /> {/* Use the imported image */}
            <p>{message}</p>
        </div>
    );
}

export default Mascot;
