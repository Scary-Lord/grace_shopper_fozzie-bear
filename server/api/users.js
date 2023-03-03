const router = require('express').Router();
const {User: Users, Cart} = require("../db");

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
router.get('/:Id', async (req, res, next) => {
    try {
        const user = await Users.findByPk(req.params.userId)
        res.json(user)
    }
    catch (error) {
        next(error)
    }
})

// Post to add user /api/users/addUser
router.post("/addUser", async (req,res,next)=>{
    try{
        res.status(201).send(await Users.create(req.body));
    } catch (error) {
        next(error);
    }

})

// post to add cart to user /api/users/:userId/cart/:cartId
router.put("/:Id/cart/:Id", async (req, res, next) => {
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
