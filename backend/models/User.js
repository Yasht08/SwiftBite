// Place this file in: backend/models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

module.exports = mongoose.model('User', UserSchema);