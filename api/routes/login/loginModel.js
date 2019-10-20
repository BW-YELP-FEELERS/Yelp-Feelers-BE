const db = require('../../../data/dbConfig');  // connect to db via dbConfig which is connected to knexfile.

module.exports = (userCreds) => {
    db('yfusers')
    .select('username', 'password')
    .where('username', userCreds.username)
    .first()
}