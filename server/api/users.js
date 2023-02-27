const router = require('express').Router();
const {User: Users}=require("../db");

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'fName', 'username']
        })
        res.json(users)
    }
    catch (error) {
        next(error)
    }
})

// GET /api/users/:userId
router.get('/:userId', async (req, res, next) => {
    try {
        const user = await Users.findByPk(req.params.userId)
        res.json(user)
    }
    catch (error) {
        next(error)
    }
})

// Post to add user /api/users/addUser
router.post("/user/addUser", async (req,res,next)=>{
    try{
        res.status(201).send(await Users.create(req.body));
    } catch (error) {
        next(error);
    }

})

// post to add cart to user /api/users/addCart
router.put("/user/:cart", async (req, res, next) => {
    try {
        const user = await Users.findByPk(req.params.userId)
        const cart = await Cart.findByPk(req.params.cartId)
        await user.addCart(cart)
        res.json(user)
    } catch (error) {
        next(error)
    }
})

module.exports = router;