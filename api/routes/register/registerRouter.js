// imports
const express = require('express')  // create express object
const db = require('./registerModel')  // connect to database via models which are connected to db via knexfile
const bcrypt = require('bcryptjs');

// create router
const router = express.Router()

// Registration route
router.post('/register', (req, res) => {
    const user = req.body  // destructuring keys off req.body object.
    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash 
    db(user)
    .then((newuser) => {
        res.status(201).json({Message: `Successfully registered as: ${newuser.id}`, newuser})
    })
    .catch(err => {
        console.log(err)
        // response fires both when username is already in the database & if a username & password is not provided.
        res.status(400).json({Message: `Did you provide a username & password?  It is also possible you have registered this username already.`, err})
    })
    
})

module.exports = router;