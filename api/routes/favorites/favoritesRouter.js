const router = require('express').Router();
const favoritesdb = require('./favoritesModel');
const usersdb = require('../users/usersModel')

// middleware
const {verifyuser} = require('./favsMW');

// POST a favorite!
router.post('/users/:userid/favs/:reviewid', (req, res) => {
    const{userid, reviewid} = req.params
    return usersdb.getuserbyid(userid)
        .then(founduser => {
            favoritesdb.addFavorite(founduser.id, reviewid)
            .then(response => {
                // console.log(response)
                res.status(201).json({success: true, message: 'Record added successfully!'})
            })
            .catch(err => {
                // console.log(err) 
                res.status(400).json({message: `It appears ${founduser.username} has already favorited the record with id of: ${reviewid}!` })
            })
        })
        .catch(err => {
            // console.log(err)
            res.status(418).json({message: 'awww nahh now ya gone and done it!', error: err.message})
        })
})

// GET USER SPECIFIC FAVORITES
router.get('/users/:userid/favs', (req, res) => {
    const userid = req.params.userid
    usersdb.getuserbyid(userid)
    .then(founduser => {
        // console.log(founduser)
        favoritesdb.getFavoritesByUserID(userid)
        .then(response => {
            // console.log('I AM FROM THE FAVORITES GETTER',response)
            res.status(200).json({loggedInUser: founduser.id, response})
        })
        .catch(err => {
            // console.log(err) 
            res.status(400).json({message: 'you are doing something terribly wrong!'}, err)
        })
    })
    .catch(err => {
        // console.log(err)
        res.status(418).json({message: 'awww nahh now ya gone and done it!', error: err.message})
    })
})

//  GET ALL FAVORITES
router.get('/favs', (req, res) => {
    favoritesdb.getAllFavorites()
    .then(response => {
        // console.log('I AM FROM THE FAVORITES GETTER',response)
        res.status(200).json(response)
    })
    .catch(err => {
        // console.log(err)
        res.status(418).json({message: 'awww nahh now ya gone and done it!', error: err.message})
    })
})

// DELETE A DAMN FAVORITE!!  
router.delete('/users/:userid/favs/:reviewid/remove', (req, res) => {
    const {userid, reviewid} = req.params
    favoritesdb.removeFavorite(userid, reviewid)
    .then(deleted => {
        res.status(200).json({success: true, deleted})
    })
    .catch(err => {
        res.status(204).json({success: false, error: err.message})
    })
})

module.exports = router;