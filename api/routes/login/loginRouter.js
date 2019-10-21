const router = require('express').Router()
const login = require('./loginModel');

router.post('/login', (req, res) => {
    const {username, password} = req.body 
    // confirm body contains username, password
    username && password ? 
    login({username, password})
    .then(user => {
        res.status(200).json({message: `Successfully logged in! Welcome ${user.username}`,user})
    })
    .catch(err => {
        // console.log(err)
        res.status(404).json({message: 'Invalid Credentials.  Please check your login credentials and try again.'})
    }) :
    res.status(400).json({message: 'Please provide a valid USERNAME and PASSWORD'})
    // username/password?  database login event
    
})




module.exports = router;