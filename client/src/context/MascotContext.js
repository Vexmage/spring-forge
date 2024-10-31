// src/context/MascotContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const MascotContext = createContext();

// Create the provider component
export const MascotProvider = ({ children }) => {
    const [message, setMessage] = useState("Hello, I’m Sparky!");
    const [customization, setCustomization] = useState({
        image: "path/to/sparky-image.png", // Use an appropriate path to Sparky's image
    });

    return (
        <MascotContext.Provider value={{ message, customization }}>
            {children}
        </MascotContext.Provider>
    );
};
