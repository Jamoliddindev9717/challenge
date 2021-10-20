const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/key/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('key', {
                title: "Ko'chmas mulk",
                db : data
            })
        }
    })
})



module.exports = router