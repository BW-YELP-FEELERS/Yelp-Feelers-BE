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
    .catch(err => {console.log(err)})
    
})

module.exports = router;