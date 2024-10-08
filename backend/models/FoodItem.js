const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('FoodItem', FoodItemSchema);
