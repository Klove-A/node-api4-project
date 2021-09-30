const express = require('express');

const server = express();

server.use(express.json());

server.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Greg" }])
});

server.post("/api/register", (req, res) => {
  res.json("new user")
});
server.post("/api/login", (req, res) => {
  res.json("welcome")
});


module.exports = server;
