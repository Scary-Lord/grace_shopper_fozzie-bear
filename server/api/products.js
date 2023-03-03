const express = require('express');
const router = express.Router();

const Products = require('../db');

// GET route for all products
router.get('/', async (req, res) => {
  try {
    const products = await Products.findAll({
        
    });
   
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// GET route for one product
router.get('/:id', async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST route for one product
router.post('/:category', async (req, res) => {
  try {
    const products = await Products.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get product by ID
// router.get('/:id', getProducts,async (req, res, next) =>{
//   try {
//     const product = await Products.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Cannot find product' });
//     }
//     req.product = product;
//     next();
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
// });

module.exports = router;