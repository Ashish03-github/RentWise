const express = require('express');
const http = require('http');
const cors = require('cors');

const setupSocket = require('./socket');

const app = express();
app.use(cors());

const server = http.createServer(app);

// attach socket.io
setupSocket(server);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Socket server running on http://localhost:${PORT}`);
});
