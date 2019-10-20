const express = require('express');

// create express server
const server = express();

//middleware
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`WE ARE UP AND RUNNING!!`)
});



module.exports = server;