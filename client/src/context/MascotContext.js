// src/context/MascotContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const MascotContext = createContext();

// Create the provider component
export const MascotProvider = ({ children }) => {
    const [message, setMessage] = useState("Hello, I’m Sparky!");
    const [customization, setCustomization] = useState({
        color: "Brown",
        clothing: "Knight Armor",
        accessory: "Magic Staff",
        personality: "Wise",
        image: "path/to/sparky-image.png"  // Use an appropriate path to Sparky's image
    });

    const updateCustomization = (newCustomization) => {
        setCustomization(newCustomization);
        console.log("Mascot customization saved:", newCustomization);
    };

    return (
        <MascotContext.Provider value={{ message, customization, updateCustomization }}>
            {children}
        </MascotContext.Provider>
    );
};
