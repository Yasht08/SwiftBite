import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const CartPage = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) return; // Ensure user is logged in

      try {
        const response = await axios.get(`http://localhost:5000/api/cart/fetch/${user.id}`);
        setCartItems(response.data);
      } catch (error) {
        setError("Failed to load cart items.");
        console.error("Fetch cart items error:", error);
      }
    };
    fetchCartItems();
  }, [user]);

  const handleRemoveFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/delete/${user.id}/${itemId}`);
      setCartItems(cartItems.filter(item => item.itemId !== itemId));
    } catch (error) {
      setError("Failed to remove item from cart.");
      console.error("Remove from cart error:", error);
    }
  };

  return (
    <div>
      <h3>Your Cart</h3>
      {error && <p className="error-message">{error}</p>}
      <div className="item-list">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item.itemId} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => handleRemoveFromCart(item.itemId)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
