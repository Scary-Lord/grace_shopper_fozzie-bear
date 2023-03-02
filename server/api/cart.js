const router = require('express').Router()
const Cart = require('../db')

router.get('/:userId', async (req, res, next) => {
    try {
        const cart = await Cart.findOne({where: {user: req.params.userId}})
        res.json(cart)
    } catch (err) {
        next(err)
    }
})

router.post('/:userId', async (req, res, next) => {
    // if(!await Cart.findByPk(req.params.userId)) {
    //     try {
    //         res.status(201).json(await Cart.create(req.body))
    //     } catch (err) {
    //         next(err)
    //     }
    // } else {
    //     res.status(500)
    // }
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

router.put('/:userId', async (req, res, next) => {
    try {
        const cart = await Cart.findOne({where: {user: req.params.userId}})
        res.json(await cart.update(req.body))
    } catch (err) {
        next(err)
    }
})

router.delete('/:userId', async (req, res, next) => {
    try {
        const cart = await Cart.findOne({where: {user: req.params.userId}})
        const product = await cart.findAll({attributes: req.body})
        res.json(await product.destroy())
    } catch (err) {
        next(err)
    }
})