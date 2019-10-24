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
const mockrevsRoutes = require('./routes/mockreviews/mockrevsRouter');
const protmockrevsRoutes = require('./routes/protectedmockreviews/protmockrevsRouter');
const favsRoutes = require('./routes/favorites/favoritesRouter');

//import mw 
const authenticate = require('../auth/auth');

//middleware
server.use(helmet(), cors(), express.json());
server.use('/', registerRoutes, loginRoutes, mockrevsRoutes)
server.use('/auth', authenticate, usersRoutes, protmockrevsRoutes, favsRoutes)

server.get('/', (req, res) => {
    res.send(`WE ARE UP AND RUNNING!!`)
});



module.exports = server;