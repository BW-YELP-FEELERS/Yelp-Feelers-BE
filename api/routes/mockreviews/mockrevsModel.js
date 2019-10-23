const db = require('../../../data/dbConfig');

module.exports = {
    find,
    findbyid
}

// with the current orderBy, returning the TOP RATED businesses first.
function find(){
    return db('livereviews')
    .select('id','business_id', 'business_name', 'address', 'city', 'state', 'postal_code as zip', 'categories', 'yelp_store_rating as yelp_rating', 'original_yelp_user_rating as user_review', 'original_text_review')
    .orderBy(`user_review`, 'desc')
    .limit(20)
}

//  returning record based on it's primary key (id)
function findbyid(id){
    return db('livereviews')
    .select('id', 'business_id', 'business_name', 'address', 'city', 'state', 'postal_code as zip', 'categories', 'yelp_store_rating as yelp_rating', 'original_yelp_user_rating as user_review', 'original_text_review')
    .where({id})
    .first()
}