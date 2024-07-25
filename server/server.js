const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    // Sending a welcome message to the client upon connection
    ws.send('Welcome to the WebSocket server!');

    ws.on('message', function incoming(message) {
        // Optional: Echo the received message back to the client

        ws.send(message);
        console.log('Received: %s', message);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket server started on port 8080');