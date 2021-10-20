const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/xobbi/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('xobbi', {
                title: "Xobbi , dam olish sport",
                db : data
            })
        }
    })
})



module.exports = router