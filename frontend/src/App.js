import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import CategoryPage from "./pages/CategoryPage"; // Import CategoryPage
import "./App.css";
import CartPage from './components/CartPage';


const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signup" || location.pathname === "/signin";

  return (
    <div className="App">
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;