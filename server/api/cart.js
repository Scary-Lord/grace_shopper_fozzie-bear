const router = require('express').Router()
const {Cart} = require('../db')
const {Products} = require('../db')

// get the cart by the userID
router.get('/:userId', async (req, res, next) => {
    try {
        // uses findOrCreate; if cart doesnt exist, makes one and assigns userId
        const cart = await Cart.findAll({
            where: {user: req.params.userId},
        })
        res.json(cart)
    } catch (err) {
        next(err)
    }
})

// make a cart for the user based on userId
// router.post('/:userId', async (req, res, next) => {
//     try {
//         const cart = await Cart.findOne({where: {user: req.params.userId}})
//         res.json(cart)
//     } catch (err) {
//         next(err)
//     }
// })

// add a product to the cart
router.put('/:userId/:productId', async (req, res, next) => {
    try {
        const cart = await Cart.findOne({where: {userId: req.params.userId}})
        const product = await Products.findByPk(req.params.productId)
        // sequelize magic method for adding a product to the cart found via the userId
        await cart.addProducts(product)
        res.json(cart)
    } catch (err) {
        next(err)
    }
})

// delete a product from the user's cart
router.delete('/:userId/:productId', async (req, res, next) => {
    try {
        const cart = await Cart.findOne({where: {user: req.params.userId}})
        const product = await Products.findByPk(req.params.productId)
        // sequelize magic method for removing a product from the user's cart
        await cart.removeProducts(product)
        res.json(cart)
    } catch (err) {
        next(err)
    }
})

module.exports = router;