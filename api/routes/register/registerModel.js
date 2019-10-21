const db = require('../../../data/dbConfig');
const user = require('../users/usersModel');

module.exports = (userCreds) => {
    return db('yfusers')
    .insert(userCreds, 'id')
    .then(([id]) => {
        return db('yfusers')
        .select('id', 'username')
        .where({id})
        .first()
    })
}