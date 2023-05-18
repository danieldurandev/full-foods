const express = require("express");
const router = require("./router/router.js");
const { middlewares } = require("./middlewares/middlewares.js");

const server = express();
server.name = "API";

//Conjuntos de middlewares
server.use(middlewares);
server.use(express.json());

// Envia la request al enrutador
server.use("/", router);

module.exports = server;
