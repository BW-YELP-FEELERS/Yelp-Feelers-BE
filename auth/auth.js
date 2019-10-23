const jwt = require('jsonwebtoken');


const jwtKey = process.env.JWT_SECRET || 'i swear I added a secret.  I just know I did!'


module.exports = (req, res, next) => {
    const mytoken = req.get('Authorization');
    return mytoken ? jwt.verify(mytoken, jwtKey, (err, decodedmytoken) => {
        return err ? 
        (res.status(401).json({err})):
        (req.decoded = decodedmytoken),
        (next())  
    }):
    res.status(401).json({error: 'Must be logged in with permissions'})
}


