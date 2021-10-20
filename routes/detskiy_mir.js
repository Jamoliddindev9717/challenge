const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/detskiy_mir/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('detskiy_mir', {
                title: "detskiy_mir",
                db : data
            })
        }
    })
})


module.exports = router