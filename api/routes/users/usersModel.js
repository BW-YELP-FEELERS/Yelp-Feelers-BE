const db = require('../../../data/dbConfig');

module.exports = {
    getallusers,
    getuserbyid
}

function getallusers(){
    return db('yfusers')
    .select('id', 'username', 'created_at')
}

function getuserbyid(userid){
    return db('yfusers')
    .select('id', 'username', 'created_at')
    .where('id',userid)
    .first()
}
