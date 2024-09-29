// Place this file in: backend/routes/orders.js

const express = require('express');
const User = require('../models/User');
const Item = require('../models/Item');
const Order = require('../models/Order');

const router = express.Router();

router.post('/checkout', async (req, res) => {
  try {
    const { userId, items } = req.body;
    const user = await User.findById(userId);
    let total = 0;
    let orderItems = [];

    for (let item of items) {
      const dbItem = await Item.findById(item.id);
      if (!dbItem || dbItem.stock < item.quantity) {
        return res.status(400).send(`Item ${dbItem.name} is out of stock`);
      }
      total += dbItem.price * item.quantity;
      orderItems.push({ item: dbItem._id, quantity: item.quantity });
      dbItem.stock -= item.quantity;
      await dbItem.save();
    }

    const order = new Order({
      user: userId,
      items: orderItems,
      total
    });

    await order.save();
    user.orders.push(order);
    user.cart = [];
    await user.save();

    res.status(201).send(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate({
      path: 'orders',
      populate: { path: 'items.item' }
    });
    res.send(user.orders);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;