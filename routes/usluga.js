const {Router} = require('express')
const router = Router()
const dbProduct = require('../models/Products')

router.get('/usluga/',  (req, res) => {
    dbProduct.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('usluga', {
                title: "Xizmatlar",
                db : data
            })
        }
    })
})


module.exports = router