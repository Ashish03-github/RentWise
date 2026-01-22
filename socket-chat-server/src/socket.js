const { Server } = require('socket.io');
const EVENTS = require('./constants');

module.exports = function setupSocket(server) {
  const io = new Server(server, {
    cors: { origin: '*' },
  });

  io.on('connection', socket => {
    console.log('🔌 Connected:', socket.id);

    socket.on(EVENTS.ROOM_JOIN, ({ roomId }) => {
      socket.join(roomId);
    });

    socket.on(EVENTS.MESSAGE_NEW, payload => {
      socket.to(payload.roomId).emit(EVENTS.MESSAGE_NEW, payload);
    });

    socket.on(EVENTS.TYPING_START, ({ roomId, userId }) => {
      socket.to(roomId).emit(EVENTS.TYPING_START, { userId });
    });

    socket.on(EVENTS.TYPING_STOP, ({ roomId, userId }) => {
      socket.to(roomId).emit(EVENTS.TYPING_STOP, { userId });
    });

    socket.on(EVENTS.PUBLIC_KEY, ({ userId, publicKey }) => {
      socket.broadcast.emit(EVENTS.PUBLIC_KEY, { userId, publicKey });
    });

    socket.on('disconnect', () => {
      console.log('❌ Disconnected:', socket.id);
    });
  });
};
