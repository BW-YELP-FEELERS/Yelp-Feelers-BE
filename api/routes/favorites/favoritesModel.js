const db = require('../../../data/dbConfig');  // connect to db via dbConfig which is connected to knexfile.

module.exports = {
    addFavorite,
    getFavorite,
    getFavoriteById,
    removeFavorite
}

// add a favorite
function addFavorite(userid, reviewid){
    db
    .insert({ user_id: userid, review_id: reviewid })
    .into('favorites').returning('*')

    // db('favorites')
    // .insert({user_id: userid, review_id: reviewid})
    // .returning('*')
    // .where({userid})
}

// get favorites
function getFavorite(){
    return db('yfusers')
    .leftjoin('reviews', {'yfusers.id': 'reviews_id'})
}

// get a favorite by id
function getFavoriteById(){
    return null
}

// remove a favorite
function removeFavorite(){
    return null
}