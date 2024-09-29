import React, { useState } from "react";
import { auth, provider } from "../config/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './SignUp.css'; // Import the CSS file for styles

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      await axios.post("http://localhost:5000/api/auth/register", { idToken });
      setSuccess(true);
      setTimeout(() => navigate("/signin"), 2000);
    } catch (error) {
      setError("Failed to sign up: " + error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setSuccess(false);

    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      await axios.post("http://localhost:5000/api/auth/register", { idToken });
      setSuccess(true);
      setTimeout(() => navigate("/signin"), 2000);
    } catch (error) {
      setError("Failed to sign up with Google: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Logo" /> {/* Add this line */}
      </div>
      <div className="form-container">
        <h2>Sign Up</h2>
        {success && <p className="success-message">Sign up successful! Redirecting to sign-in...</p>}
        <form onSubmit={handleEmailSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={handleGoogleSignUp}>Sign up with Google</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
