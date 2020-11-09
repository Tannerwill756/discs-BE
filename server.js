const express = require("express");
const server = express();
const mongoose = require('mongoose');

server.use(express.json());

mongoose.connect('mongodb://localhost/discgolf', { useUnifiedTopology: true, useNewUrlParser: true})
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });


module.exports = server;