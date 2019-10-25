const favoritesdb = require('./favoritesModel');
const usersdb = require('../users/usersModel')

module.exports = {
    verifyuser,
    // verifybusentity
}

function verifyuser(req, res, next){
    const {userid, reviewid} = req.body
    usersdb.getuserbyid(req.body.userid)
    .then(userfound => {
        userfound ? next() : res.status(404).json({success: false, message: `Sorry, the user with id: ${userid} couldn't be located!`})
    })
    .catch(err => {console.log(err.message)})
    favoritesdb.getFavoriteById(reviewid)
    .then(recordfound => {
        recordfound ? next() : res.status(404).json({success: false, message: `Sorry, the user with id: ${reviewid} couldn't be located!`})
    })
        
}


// function verifyuser(req, res, next){

// }