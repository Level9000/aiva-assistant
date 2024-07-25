// WebSocketContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const WebSocketContext = createContext({ ws: null, isReady: false });

export const WebSocketProvider = ({ children }) => {
    const [ws, setWs] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');

        const handleOpen = () => {
            console.log("WebSocket connection established.");
            setIsReady(true); // Set isReady to true when connection is open
        };

        socket.addEventListener('open', handleOpen);

        setWs(socket);

        return () => {
            socket.removeEventListener('open', handleOpen);
            socket.close();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ ws, isReady }}>
            {children}
        </WebSocketContext.Provider>
    );
};

// Hook to use WebSocket in any component
export const useWebSocket = () => useContext(WebSocketContext);