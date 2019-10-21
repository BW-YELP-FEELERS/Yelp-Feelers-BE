const db = require('../../../data/dbConfig');
const user = require('../users/usersModel');

// module.exports = (userCreds) => {
//     return db('yfusers')
//     .insert(userCreds)
//     .then(([id]) => {
//         return db('yfusers')
//         .select('id', 'username')
//         .where({id})
//         .first()
//     })
// }

module.exports = (userCreds) => {
    return db('yfusers')
    .insert(userCreds)
    .then(([id]) => {
        return db('yfusers')
        .where({id})
        .first()  
    })
}