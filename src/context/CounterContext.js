import React, { createContext, useState } from 'react';

// Create the CounterContext
export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider
        
        value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};
