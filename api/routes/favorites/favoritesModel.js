const db = require('../../../data/dbConfig');  // connect to db via dbConfig which is connected to knexfile.

module.exports = {
    addFavorite,
    getFavorite,
    getFavoriteById,
    removeFavorite
}

// add a favorite
function addFavorite(){
    return null
}

// get favorites
function getFavorite(){
    return db('favorites')
}

// get a favorite by id
function getFavoriteById(){
    return null
}

// remove a favorite
const addFavorite = () => {
    return null
}