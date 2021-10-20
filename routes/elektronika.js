const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/elektronika/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('elektronika', {
                title: "Elektor jihozlari",
                db : data
            })
        }
    })
})



module.exports = router