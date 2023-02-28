const express = require('express');
const router = express.Router();

const Product = require('../models/product');


// GET route for all products
router.get('api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    });

// GET route for one product
router.get('api/products/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (err) {
        res.status =500;
    }
    });

// POST route for one product
router.post('api/products/:catagory', async (req, res) => {
    try {
        const products = await Product.find({catagory: req.params.catagory});
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
    });


    // Middleware function to get product by ID
async function getProduct(req, res, next) {
    try {
        const product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Cannot find product' });
        }
    res.product = product;
    next ();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.export = router;