const router = require('express').Router();
const {User: Users, Cart} = require("../db");
const bcrypt = require('bcrypt');
const saltRounds = 10;



// Post to add user /api/users/addUser
const hashPasswordMiddleware = async (req, res, next) => {
    try {
      // Hash the password if it exists in the request body
      if (req.body.password) {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword;
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  const hashUsernameMiddleware = async (req, res, next) => {
    try {
      // Hash the password if it exists in the request body
      if (req.body.username) {
        const hashedUsername = await bcrypt.hash(req.body.username, saltRounds);
        req.body.username = hashedUsername;
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  const hashAddressMiddleware = async (req, res, next) => {
    try {
      // Hash the password if it exists in the request body
      if (req.body.address) {
        const hashedAddress = await bcrypt.hash(req.body.address, saltRounds);
        req.body.address = hashedAddress;
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  // Apply the middleware to all relevant routes
  router.post("/addUsers", hashPasswordMiddleware,hashUsernameMiddleware,hashAddressMiddleware, async (req, res, next) => {
    try {
      const user = await Users.create(req.body);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get('/', async (req, res, next) => {
    try {
        const users = await Users.findAll({
            
        })
        res.json(users)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
})

// GET /api/users/:userId
router.get('/:Id', async (req, res, next) => {
    try {
        const user = await Users.findByPk(req.params.Id)
        res.json(user)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
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
