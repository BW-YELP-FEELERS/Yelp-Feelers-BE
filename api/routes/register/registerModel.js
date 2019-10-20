const db = require('../../../data/dbConfig');

module.exports = (userCreds) => {
    return db('yfusers')
    .insert(userCreds)
    .then(([id]) => {
        return db('yfusers')
        .select('id', 'username')
        .where({id})
        .first()
    })
}