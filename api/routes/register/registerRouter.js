// imports
const express = require('express')  // create express object
const db = require('./registerModel')  // connect to database via models which are connected to db via knexfile
const bcrypt = require('bcryptjs');

const valuser = require('../../../utils/middleware/validateUser')


// create router
const router = express.Router()

// Registration route
router.post('/register', valuser, (req, res) => {
    const user = req.body  // destructuring keys off req.body object.
    const bold = process.env.PW_BOLD
    user.password = bold 
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