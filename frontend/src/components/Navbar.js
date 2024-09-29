import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token'); // Make sure to remove the token or any user data
    navigate("/signin");
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "10px 20px",
  };

  const headerStyle = {
    textAlign: "left",
  };

  const titleStyle = {
    color: "rgb(61, 6, 163)",
    margin: 0,
  };

  const taglineStyle = {
    color: "#faa700",
    margin: 0,
    fontSize: "smaller",
  };

  const listStyle = {
    listStyleType: "none",
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#faa700",
    transition: "color 0.3s ease",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#faa700",
    cursor: "pointer",
    fontSize: "16px",
  };

  const cartGifStyle = {
    width: "20px",
    height: "20px",
    marginRight: "5px",
    verticalAlign: "middle",
  };

  const logoStyle = {
    width: "40px",
    height: "auto",
    marginRight: "10px",
    verticalAlign: "middle",
  };

  return (
    <nav style={navbarStyle}>
      <div style={headerStyle}>
        <Link to="/home">
          <img src={`${process.env.PUBLIC_URL}/images/akasa.png`} alt="Akasa Logo" style={logoStyle} />
        </Link>
        <div>
          <h1 style={titleStyle}>Akasa Air</h1>
          <p style={taglineStyle}>Taste the Journey with Every Bite!</p>
        </div>
      </div>
      <ul style={listStyle}>
        <li>
          <Link to="/home" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" style={linkStyle}>
            <img src={`${process.env.PUBLIC_URL}/images/cart.gif`} alt="Cart" style={cartGifStyle} />
            Cart
          </Link>
        </li>
        {user && (
          <>
            <li>
              <Link to="/orders" style={linkStyle}>
                Orders
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} style={buttonStyle}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;