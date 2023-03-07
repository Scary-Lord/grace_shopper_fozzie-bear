const router = require('express').Router()
const {Cart} = require('../db')
const {Products} = require('../db')
const {UserCart} = require('../db')

// get the cart by the userID
router.get('/:userId', async (req, res, next) => {
    try {
        const cart = await UserCart.findAll({
            where: {cartId: req.params.userId},
        })
        res.json(cart)
    } catch (err) {
        next(err)
    }
})

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