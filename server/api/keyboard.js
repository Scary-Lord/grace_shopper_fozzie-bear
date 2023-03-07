// keyboard router
const express = require('express');
const router = express.Router();
const { Products } = require('../db/models')

// GET route for all keyboards
router.get('/keyboard',async (req, res) => {
    try {
        const keyboards = await Products.findAll({
            where: {
                category: 'keyboard'
    }
});
        res.json(keyboards);
} catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
}
});

// GET route for one keyboard
router.get('/:keyboardId', async (req, res) => {
    try {
        const keyboard = await Products.find(
            {where:{id:req.params.keyboardId}});
        res.json(keyboard);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
);

module.exports = router;

