const express = require('express');
const admin = require('../config/firebase-config'); // Firebase admin config
const User = require('../models/User'); // MongoDB User model

const router = express.Router();

// User Registration Route
router.post('/register', async (req, res) => {
  try {
    const { idToken } = req.body; // ID token from Firebase (either Google or email/password)
    const decodedToken = await admin.auth().verifyIdToken(idToken); // Verify the Firebase ID token
    const { uid, email } = decodedToken;

    // Check if the user exists
    let user = await User.findOne({ firebaseUid: uid });
    if (!user) {
      // Create a new user if it doesn't exist
      user = new User({ firebaseUid: uid, email });
      await user.save();
    }

    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
