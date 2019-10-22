const db = require('../../../data/dbConfig');  // connect to db via dbConfig which is connected to knexfile.

module.exports = (userCreds) => {
    return db('yfusers')
    // .select('username', 'password')
    .where('username', userCreds.username)
    .first()
}