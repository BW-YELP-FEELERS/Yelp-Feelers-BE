const router = require('express').Router()
const db = require('./protmockrevsModel')

router.get('/reviews', (req, res) => {
    db.find()
    .then(reviews => {
        res.status(200).json(reviews)
    })
    .catch(err => {res.status(400).json(err)})
})

router.get('/reviews/:id', (req, res) => {
    const {id} = req.params
    db.findbyid(id)
    .then(review => {
        res.status(200).json({success: "FOUND IT!!", review})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
})

module.exports = router;