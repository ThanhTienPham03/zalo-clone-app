import { io } from 'socket.io-client';

let socket;

export const connectSocket = (serverUrl) => {
    socket = io(serverUrl, {
        transports: ['websocket'], // Sử dụng WebSocket
    });

    socket.on('connect', () => {
        console.log('WebSocket connected:', socket.id);
    });

    socket.on('disconnect', () => {
        console.log('WebSocket disconnected');
    });
};

export const sendMessage = (conversationId, message) => {
    if (socket) {
        socket.emit('sendMessage', { conversationId, message });
    }
};

export const subscribeToMessages = (callback) => {
    if (socket) {
        socket.on('receiveMessage', (message) => {
            callback(message);
        });
    }
};

export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
    }
};