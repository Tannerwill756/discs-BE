require('dotenv').config();

const express = require("express");
const server = express();
const mongoose = require('mongoose');

// imported routers
const inventoryRouter = require('./inventory/inventoryRouter.js')

server.use(express.json());

// mongoose connection
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true})
const db = mongoose.connection


db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });


server.use("/inventory", inventoryRouter)


module.exports = server;