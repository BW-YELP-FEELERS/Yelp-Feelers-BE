// imports
const express = require('express')  // create express object
const db = require('./registerModel')  // connect to database via models which are connected to db via knexfile

// create router
const router = express.Router()

// Registration route
router.post('/register', (req, res) => {
    const {username, password} = req.body  // destructuring keys off req.body object.
    db({username, password})
    .then(({id, username}) => {
        res.status(201).json({Message: `Successfully registered as: ${username}`, newuserid: id, username: res.username})
    })
    .catch(err => {
        // response fires both when username is already in the database & if a username & password is not provided.
        res.status(400).json({Message: `Did you provide a username & password?  It is also possible you have registered this username already.`, err})
    })
    
})

module.exports = router;