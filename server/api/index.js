const router = require('express').Router()
router.use("/products", require("./products"));
router.use('/users', require('./users'));
router.use('/cart', require('./cart'))


//add additional model routes here as you create them!


module.exports = router;