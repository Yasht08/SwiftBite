// Place this file in: backend/models/Order.js

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ 
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    quantity: Number
  }],
  total: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);