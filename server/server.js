// import { createServer } from 'http';
// import { io } from './socket.js';
// const server = createServer();
// io.attach(server);

// io.on('connection', () => {
//     console.log('client connected via SOCKET');
// });

// server.listen('8000', () => {
//     console.log('SOCKET LISTENING ON 8000');
// });

import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log('client connected via SOCKET');
    socket.emit('msg', 'SUCCESS!!');
});

httpServer.listen(3000);