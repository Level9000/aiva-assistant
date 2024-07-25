import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { WebSocketProvider } from './hooks/WebSocketContext';
import App from './App';

// Use createRoot API for React 18+
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
    <WebSocketProvider>
        <App />
    </WebSocketProvider>
);