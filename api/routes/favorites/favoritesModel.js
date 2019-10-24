const db = require('../../../data/dbConfig');  // connect to db via dbConfig which is connected to knexfile.

module.exports = {
    addFavorite,
    getAllFavorites,
    getFavoritesByUserID,
    removeFavorite,
    getFavoriteById
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
        .join('favorites as f', 'f.user_id', 'y.id')
        .join('livereviews as m', 'f.review_id', 'm.id')
        .select('y.username', 'm.id as favoriteID', 'm.business_name', 'm.address', 'm.city', 'm.state', 'm.yelp_store_rating', 'm.original_yelp_user_rating', 'm.adjusted_sentiment_rating', 'm.name as reviewer_name', 'm.original_text_review')
}


// get all favorites for a particular user.
function getFavoritesByUserID(userid){
    return db('yfusers as y')
        .join('favorites as f', 'f.user_id', 'y.id')
        .join('livereviews as m', 'f.review_id', 'm.id')
        .select('y.username', 'm.id as favoriteID', 'm.business_name', 'm.address', 'm.city', 'm.state', 'm.yelp_store_rating', 'm.original_yelp_user_rating', 'm.adjusted_sentiment_rating', 'm.name as reviewer_name', 'm.original_text_review')
        .where('f.user_id', userid)
}
// get all favorites in table locally
// function getAllFavorites(){
//     return db('yfusers as y')
//         .join('favorites as f', 'f.user_id', 'y.id')
//         .join('mockreviews as m', 'f.review_id', 'm.id')
//         .select('y.username', 'm.id as favoriteID', 'm.business_name', 'm.address', 'm.city', 'm.state', 'm.yelp_store_rating', 'm.original_yelp_user_rating', 'm.adjusted_sentiment_rating', 'm.name as reviewer_name', 'm.original_text_review')
// }

// get all favorites for a particular user locally
// function getFavoritesByUserID(userid){
//     return db('yfusers as y')
//         .join('favorites as f', 'f.user_id', 'y.id')
//         .join('mockreviews as m', 'f.review_id', 'm.id')
//         .select('y.username', 'm.id as favoriteID', 'm.business_name', 'm.address', 'm.city', 'm.state', 'm.yelp_store_rating', 'm.original_yelp_user_rating', 'm.adjusted_sentiment_rating', 'm.name as reviewer_name', 'm.original_text_review')
//         .where('f.user_id', userid)
// }

// remove a favorite
function removeFavorite(userid, recordid){
    return getFavoriteById(recordid)
    .then(record => {
        db('favorites as f')
        .del()
        .where({user_id: userid, review_id: recordid})
        .catch(err => {console.log(err.message)})
        return record
    })
}

// get a favorite by id
function getFavoriteById(id){
    return db('livereviews')
    .where({id})
    .first()
}

