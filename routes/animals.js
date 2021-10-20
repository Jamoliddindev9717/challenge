const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/animals/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('animals', {
                title: "Hayvonlar",
                db : data
            })
        }
    })
})



module.exports = router