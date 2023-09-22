import { createServer } from 'http';
import { io } from './socket.js';
const server = createServer();
io.attach(server);

io.on('connection', () => {
    console.log('client connected via SOCKET');
});

server.listen('8000', () => {
    console.log('SOCKET LISTENING ON 8000');
});