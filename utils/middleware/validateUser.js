

module.exports = (req, res, next) => {
    const {username, password} = req.body
    username && password ? 
    next() : 
    res.status(400).json({success: false, message: "must provide a valid username and password."})
}