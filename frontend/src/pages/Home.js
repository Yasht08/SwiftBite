import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [categories] = useState([
    { name: "BBQS", image: "/images/bbq.jpg" },
    { name: "BEST-FOODS", image: "/images/best-foods.jpg" },
    { name: "BREADS", image: "/images/bread.jpg" },
    { name: "BURGERS", image: "/images/burger.jpg" },
    { name: "CHOCOLATES", image: "/images/chocolate.png" },
    { name: "DESSERTS", image: "/images/dessert.jpg" },
    { name: "DRINKS", image: "/images/drinks.jpg" },
    { name: "FRIED-CHICKEN", image: "/images/fried-chicken.jpg" },
    { name: "ICE-CREAM", image: "/images/ice-cream.jpg" },
    { name: "PIZZAS", image: "/images/pizzas.jpg" },
    { name: "PORKS", image: "/images/porks.jpg" },
    { name: "SANDWICHES", image: "/images/sandwhiche.jpg" },
    { name: "SAUSAGES", image: "/images/sausages.jpg" },
    { name: "STEAKS", image: "/images/steak.jpg" }
  ]);

  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fetchItems = async (category) => {
    try {
      const response = await axios.get(`https://free-food-menus-api-two.vercel.app/${category}`);
      setItems(response.data);
      setSelectedCategory(category);
    } catch (error) {
      console.error("Error fetching items:", error);
      setError("Failed to load items.");
    }
  };

  const handleCategoryClick = (category) => {
    fetchItems(category.name.toUpperCase());
    navigate(`/category/${encodeURIComponent(category.name.toUpperCase())}`);
  };

  const handleAddToCart = async (item) => {
    try {
      const userId = 'currentUserId'; // Replace with actual user ID logic
      await axios.post('http://localhost:5000/api/cart/add', {
        userId,
        itemId: item.id,
        name: item.name,
        price: item.price,
      });
      setSuccessMessage(`${item.name} has been added to your cart!`);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setError("Failed to add item to cart.");
    }
  };

  return (
    <div className="home-container">
      <h2>Food Categories</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <div className="category-list">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="category-card" 
            onClick={() => handleCategoryClick(category)}
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <h3>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h3>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div>
          <h3>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Items</h3>
          <div className="item-list">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className="food-item">
                  <img src={item.img || "default-image-url.jpg"} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>{item.dsc}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              ))
            ) : (
              <p>No items available in this category.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
