const router = require('express').Router()

const users = require('./usersModel');

router.get('/users', (req, res) => {
    users.getallusers()
    .then(users => {
        res.status(200).json({message: 'Fetch successful!', users})
    })
    .catch(err => {console.log(err)})
})

router.get('/users/:id', (req, res) => {
    const {id} = req.params
    users.getuserbyid(id)
    .then(user => {
        user?
        res.status(200).json({message: `User ${user.username} has been located!`, user }):
        res.status(404).json({error: `User id: ${id} cannot be located; please verify you have the correct user id.` })
    })
})

module.exports = router;
