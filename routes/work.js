const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/work/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('work', {
                title: "Ishlar",
                db : data
            })
        }
    })
})



module.exports = router