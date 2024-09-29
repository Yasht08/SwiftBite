const express = require('express');
const Cart = require('../models/Cart');

const router = express.Router();

// Add item to cart
router.post('/add', async (req, res) => {
  const { userId, itemId, name, price, image, description } = req.body;

  if (!userId || !itemId) {
    return res.status(400).json({ error: 'User ID and Item ID are required' });
  }

  try {
    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If no cart exists for the user, create one
      cart = new Cart({ userId, items: [] });
    }

    // Check if item is already in the cart
    const itemIndex = cart.items.findIndex(item => item.itemId === itemId);

    if (itemIndex > -1) {
      // If item exists, update it or just return a message
      cart.items[itemIndex].quantity += 1; // Update quantity, or adjust as needed
      await cart.save();
      return res.status(200).json({ message: 'Item quantity updated in cart successfully' });
    }

    // Add new item to the cart
    cart.items.push({ itemId, name, price, image, description, quantity: 1 });

    await cart.save();
    res.status(200).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// Delete item from cart
router.delete('/delete/:userId/:itemId', async (req, res) => {
  const { userId, itemId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Filter out the item to be deleted
    cart.items = cart.items.filter(item => item.itemId !== itemId);

    await cart.save();
    res.status(200).json({ message: 'Item deleted from cart successfully' });
  } catch (error) {
    console.error('Error deleting item from cart:', error);
    res.status(500).json({ error: 'Failed to delete item from cart' });
  }
});

// Fetch items from cart
router.get('/fetch/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart.items); // Return only the items array
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
});

module.exports = router;
