// Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// create express server
const server = express();

// import router
const registerRoutes = require('./routes/register/registerRouter');
const loginRoutes = require('./routes/login/loginRouter');
const usersRoutes = require('./routes/users/usersRouter');

//middleware
server.use(helmet(), cors(), express.json());
server.use('/', registerRoutes, loginRoutes, usersRoutes)

server.get('/', (req, res) => {
    res.send(`WE ARE UP AND RUNNING!!`)
});



module.exports = server;