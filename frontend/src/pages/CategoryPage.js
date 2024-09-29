import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`https://free-food-menus-api-two.vercel.app/${categoryName}`);
        setItems(response.data);
      } catch (error) {
        setError("Failed to load items.");
        console.error("Fetch items error:", error);
      }
    };
    fetchItems();
  }, [categoryName]);

  const handleAddToCart = async (item) => {
    try {
      const userId = 'currentUserId'; // Replace with actual user ID logic

      const response = await axios.post('http://localhost:5000/api/cart/add', { // Correct API endpoint
        userId,
        itemId: item.id.toString(), // Ensure this matches your schema
        name: item.name,
        price: item.price,
        image: item.img || 'https://example.com/default-image.jpg', // Ensure this URL is valid
        description: item.dsc || 'No description available',
      });

      if (response.status === 200) {
        setSuccessMessage(`${item.name} has been added to your cart!`);
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      setError("Failed to add item to cart.");
      console.error("Add to cart error:", error);
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div>
      <h3>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Items</h3>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="item-list">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="food-item">
              <img src={item.img || "https://example.com/default-image.jpg"} alt={item.name} />
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
  );
};

export default CategoryPage;
