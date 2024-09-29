// ItemList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemList = ({ match }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const category = match.params.category;
    fetchItems(category);
  }, [match.params.category]);

  const fetchItems = (category) => {
    axios.get(`https://free-food-menus-api-two.vercel.app/${category}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setError("Failed to load items.");
      });
  };

  const handleOrder = () => {
    // Logic to handle order submission
    alert(`Order placed! Address: ${address}`);
  };

  return (
    <div>
      <h3>Items</h3>
      {error && <p className="error-message">{error}</p>}
      <div className="item-list">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="food-item">
              <img src={item.img || "default-image-url.jpg"} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.dsc}</p>
              <p>${item.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No items available in this category.</p>
        )}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); handleOrder(); }}>
        <input 
          type="text" 
          placeholder="Enter your address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          required 
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default ItemList;
