import React, { useState } from "react";
import { auth, provider } from "../config/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './SignUp.css'; // Reuse the same CSS for styling

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // Redirect to the home page upon successful sign-in
    } catch (error) {
      setError("Failed to sign in: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home"); // Redirect to the home page upon successful sign-in
    } catch (error) {
      setError("Failed to sign in with Google: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="logo-container">
      <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="form-container">
        <h2>Sign In</h2>
        <form onSubmit={handleEmailSignIn}>
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
          <button type="submit">Sign In</button>
        </form>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default SignIn;