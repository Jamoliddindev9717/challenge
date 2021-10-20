const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/free/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('free', {
                title: "Tekinga beraman",
                db : data
            })
        }
    })
})



module.exports = router