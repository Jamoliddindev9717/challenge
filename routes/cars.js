const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/cars/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('cars', {
                title: "Transport",
                db : data
            })
        }
    })
})


module.exports = router