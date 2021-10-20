const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/stil/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('stil', {
                title: "Moda va stil",
                db : data
            })
        }
    })
})


module.exports = router