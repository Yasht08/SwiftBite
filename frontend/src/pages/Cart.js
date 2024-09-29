import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [userId, setUserId] = useState(''); // Initialize userId state

    useEffect(() => {
        // Assuming userId is set here or fetched from context or props
        setUserId('someUserId'); // Replace this with your logic to get userId

        if (userId) {
            fetchCartItems();
        }
    }, [userId]); // Fetch cart items when userId changes

    const fetchCartItems = async () => {
      if (!userId) {
          console.error("User ID is undefined");
          return;
      }
  
      try {
          const response = await fetch(`/api/cart/${userId}`);
          if (!response.ok) {
              const errorText = await response.text(); // Get the error response text
              console.error("Error response:", errorText);
              throw new Error("Network response was not ok");
          }
          
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
              const data = await response.json();
              setCartItems(data);
          } else {
              console.error("Unexpected content type:", contentType);
              throw new Error("Received non-JSON response");
          }
      } catch (error) {
          console.error("Error fetching cart items:", error);
      }
  };
  

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
