  require('dotenv').config();
  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const authRoutes = require('./routes/auth');
  const itemRoutes = require('./routes/items');
  const cartRoutes = require('./routes/cart');
  const orderRoutes = require('./routes/orders');
  const axios = require('axios');
  const FoodItem = require('./models/FoodItem');

  const app = express();

  // Middleware setup
  app.use(cors({
    origin: ['http://localhost:3000', 'https://swift-bite.vercel.app'],
    credentials: true
  }));

  app.use(express.json());

  // Connect to MongoDB
  mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });

  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/items', itemRoutes);
  app.use('/api/cart', cartRoutes); // Ensure this line is present
  app.use('/api/orders', orderRoutes);

  // Fetch items from the external API and save to MongoDB
  app.post('/api/fetch-food-items', async (req, res) => {
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ error: 'Category is required' });
    }

    try {
      const response = await axios.get(`https://free-food-menus-api-two.vercel.app/${category}`);
      const items = response.data;

      await FoodItem.deleteMany({ category }); // Remove existing items of this category
      const foodItems = items.map(item => ({
        category,
        name: item.name,
        description: item.dsc || 'No description available', // Add default description if not present
        price: item.price,
        image: item.img || 'https://example.com/default-image.jpg' // Add a default image if not present
      }));

      await FoodItem.insertMany(foodItems);

      res.status(200).json({ message: 'Items fetched and saved successfully', items: foodItems });
    } catch (error) {
      console.error('Error fetching food items:', error.message);
      res.status(500).json({ error: 'Failed to fetch items from API' });
    }
  });

  // Start server
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
