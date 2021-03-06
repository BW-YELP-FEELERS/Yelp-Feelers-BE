const router = require('express').Router()
const db = require('./mockrevsModel')

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
router.get('/mockreviews', (req, res) => {
    db.mockfind()
    .then(reviews => {
        res.status(200).json(reviews)
    })
    .catch(err => {res.status(400).json(err)})
})

router.get('/mockreviews/:id', (req, res) => {
    const {id} = req.params
    db.mockfindbyid(id)
    .then(review => {
        res.status(200).json({success: "FOUND IT!!", review})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
})

module.exports = router;