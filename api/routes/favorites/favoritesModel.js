const db = require('../../../data/dbConfig');  // connect to db via dbConfig which is connected to knexfile.

module.exports = {
    addFavorite,
    getAllFavorites,
    getFavoritesByUserID,
    removeFavorite
}

// add a favorite
function addFavorite(userid, reviewid){
    console.log(userid, reviewid)
    // return db.insert({ user_id: userid, review_id: reviewid })
    // .into('favorites').returning('*')
    return db('favorites')
    .insert({user_id: userid, review_id: reviewid}, 'id')
    .where('favorites.user_id', userid)
}

// get all favorites in table
function getAllFavorites(){
    return db('yfusers as y')
        .join('favorites as f', {'f.review_id': 'y.id'})
        .join('f', {'f.user_id': 'review.id'})
        .select('y.*', 'r.*')
}

// get all favorites for a particular user.
function getFavoritesByUserID(userid){
    return db('yfusers as y')
        .join('favorites as f', 'f.user_id', 'y.id')
        .join('mockreviews as m', 'f.review_id', 'm.id')
        .select('y.*', 'm.*')
        .where('f.user_id', userid)
}

// remove a favorite
function removeFavorite(){
    return null
}

// get a favorite by id
function getFavoriteById(){
    return null
}

