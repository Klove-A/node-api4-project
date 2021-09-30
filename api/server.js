const express = require('express');

const server = express();

server.use(express.json());

server.get("/api/server", (req, res) => {
  res.json([{ id: 1, name: "Greg" }])
});


module.exports = server;
