'use strict';

const io = require('socket.io')(3001);

io.on('connection', socket => {
	console.log(`Connected to socket: ${socket}`)
	socket.on('file-save', payload => {
		io.emit('file-save', payload);
  });
  
  socket.on('file-error', payload => {
    io.emit('file-error', payload);
  });
});