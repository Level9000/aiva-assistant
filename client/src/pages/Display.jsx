import React, {useEffect, useState} from 'react';
import {useWebSocket} from '../hooks/WebSocketContext'; // Adjust the path as necessary

function Display() {
    const [latestMessage, setLatestMessage] = useState('');
    const {ws, isReady} = useWebSocket();
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    useEffect(() => {
        if (!ws || !isReady) {
            console.log("WebSocket is not ready or ws is null.");
            return;
        }
        const messageListener = (event) => {
            console.log("WebSocket message received:", event.data);
            setLatestMessage(event.data);
        };
        ws.addEventListener('message', messageListener);
        // Make sure to remove the event listener when the component unmounts or if ws/isReady changes
        return () => {
            ws.removeEventListener('message', messageListener);
        };
    }, [ws, isReady]); // Depend on ws and isReady

    return (
        <div>
            <p>Latest Message: {latestMessage}</p>
            <button onClick={toggleVisibility}>Toggle Visibility</button>
            <div style={{display: isVisible ? 'block' : 'none'}}>
                    This content is toggled by changing the display style.
            </div>
        </div>
    );
}

export default Display;