const express = require('express');
const User = require("./users/model");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json("Hello")
})

server.get("/api/users", async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({
      message: "BAD"
    })
  }
});

server.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username.trim() || !password.trim()) {
      res.status(400).json({
        message: "Please provide username and password for the user"
      })
    } else {
      const newUser = await User.insert({ username, password })
      res.status(201).json(newUser)
    }
  } catch (err) {
    res.status(500).json({
      message: "BAD"
    })
  }
});
server.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username.trim() || !password.trim()) {
      res.status(400).json({
        message: "Please provide username and password for the user"
      })
    } else {
      res.status(201).json(`Welcome ${username}`)
    }
  } catch (err) {
    res.status(500).json({
      message: "BAD"
    })
  }
});


module.exports = server;
