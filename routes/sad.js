const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/sad/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('sad', {
                title: "Uy va bog'",
                db : data
            })
        }
    })
})



module.exports = router