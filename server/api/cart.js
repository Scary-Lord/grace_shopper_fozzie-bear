const router = require('express').Router()
const Cart = require('../db')
const Products = require('../db')

// get the cart by the userID
router.get('/:userId', async (req, res, next) => {
    try {
        const cart = await Cart.findOne({where: {user: req.params.userId}})
        res.json(cart)
    } catch (err) {
        next(err)
    }
})

// make a cart if there is none associated with the user
router.post('/:userId', async (req, res, next) => {
    try {
        const cart = await Cart.findOrCreate({
            where: {user: req.params.userId},
            defaults: {products: req.body}
        })
        res.json(cart)
    } catch (err) {
        next(err)
    }
})

// add a product to the cart
router.put('/:userId/:productId', async (req, res, next) => {
    try {
        const cart = await Cart.findOne({where: {user: req.params.userId}})
        const product = await Products.findByPk(req.params.productId)
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
        await cart.removeProducts(product)
        res.json(cart)
    } catch (err) {
        next(err)
    }
})
module.exports = router;