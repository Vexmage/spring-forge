// src/components/Mascot.js
import React, { useContext } from 'react';
import { MascotContext } from '../context/MascotContext';
import sparkyImage from '../assets/sparky.png';
import './Mascot.css';

function Mascot() {
    const { message, customization } = useContext(MascotContext);

    return (
        <div className="mascot" style={{ color: customization.color.toLowerCase() }}>
            <img src={sparkyImage} alt="Sparky the Dungeon Dog" />
            <p>{message}</p>
            <p>Accessory: {customization.accessory}</p>
            <p>Personality: {customization.personality}</p>
        </div>
    );
}

export default Mascot;
