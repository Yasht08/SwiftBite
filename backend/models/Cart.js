// models/Cart.js
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [{
    itemId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  }]
}, { timestamps: true });

module.exports = mongoose.model('Cart', CartSchema);
