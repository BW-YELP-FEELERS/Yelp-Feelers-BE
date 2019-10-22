const router = require('express').Router()
const login = require('./loginModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/login', (req, res) => {
    const {username, password} = req.body; 
    // confirm body contains username, password
    username && password ? 
    login({username, password})
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const payload = {
                subject: user.id,
                username: user.username,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'})
            res.status(200).json({message: `Successfully logged in! Welcome ${user.username}`,username: user.username, token})
        }else {
            res.status(400).json({error: 'credentials do not match'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({message: 'Invalid Credentials.  Please check your login credentials and try again.'})
    }) :
    res.status(400).json({message: 'Please provide a valid USERNAME and PASSWORD'})
    // username/password?  database login event
    
})


//example
// router.post('/', (req, res) => {
//     const {username, password} = req.headers;
//     db.logIn({username})  // without the {} around username, we would have to change the where statement for db.logIn to be where('username', cred).
//     .then(user => {
//         // console.log('password', password, 'user.password', user.password)
//         if (user && bcrypt.compareSync(password, user.password)) {
//             req.session.username = user.username
//             res.status(200).json({ success: true, message: `Welcome ${user.username}!` })
//         }else{
//             res.status(401).json({ success: false, message: 'Invalid Credentials' });
//         }
//     })
//     .catch(err => {
//         res.status(500).json(errorRef(err))
//     })
// })



module.exports = router;