const router = require('express').Router();
const db = require('./favoritesModel');
const usersdb = require('../users/usersModel')


router.post('/:userid/favs/reviewid', (req, res) => {
    const{userid, reviewid} = req.params
    return usersdb.getuserbyid(userid)
        .then(user => {
            return db.addFavorite(userid, reviewid)
                .then(favs => {
                res.status(201).json({Success: true}, favs)
                .catch(err => {
                    console.log(err) 
                    res.status(400).json({message: 'you are doing something terribly wrong!'})
                })
            })
        })
        .catch(err => {
            console.log(err)
            res.status(418).json({message: 'awww nahh now ya gone and done it!', err})
        })
})

module.exports = router;