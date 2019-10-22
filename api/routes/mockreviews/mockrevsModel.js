const db = require('../../../data/dbConfig');

module.exports = {
    find,
    findbyid
}

function find(){
    return db('mockreviews')
    .select('id','business_id', 'business_name', 'address', 'city', 'state', 'postal_code as zip', 'categories', 'yelp_store_rating as yelp_rating', 'original_yelp_user_rating as user_review', 'original_text_review')
}

function findbyid(id){
    return db('mockreviews')
    .select('business_id', 'business_name', 'address', 'city', 'state', 'postal_code as zip', 'categories', 'yelp_store_rating as yelp_rating', 'original_yelp_user_rating as user_review', 'original_text_review')
    .where({id})
    .first()
}