// src/components/Mascot.js
import React, { useContext } from 'react';
import { MascotContext } from '../context/MascotContext';

function Mascot() {
    const { message, customization } = useContext(MascotContext);

    return (
        <div className="mascot">
            <img src={customization.image} alt="Sparky the Dungeon Dog" />
            <p>{message}</p>
        </div>
    );
}

export default Mascot;
