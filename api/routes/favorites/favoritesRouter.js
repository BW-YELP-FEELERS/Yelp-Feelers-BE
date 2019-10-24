const router = require('express').Router();
const db = require('./favoritesModel');

const addMyFavorite = (userid, reviewid) => {
    return db.insert({ user_id: userid, review_id: reviewid }).into('favorites').returning('*')
}