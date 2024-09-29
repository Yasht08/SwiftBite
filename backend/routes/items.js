const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// Get all food items
router.get('/', async (req, res) => {
    try {
        const items = await FoodItem.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
