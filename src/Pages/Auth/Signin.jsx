import React, { useState } from "react";
import "./Signin.css"; // Import the CSS file
import axios from 'axios';
import { toast } from "sonner";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email: email,
        password: password
      };

      // Send user data to the server for authentication
      const { data } = await axios.post('https://ecommerce-node4.vercel.app/auth/signin', userData);

      if (data.message === "success") {
        toast.success('Signin Successfuly');

        // Redirect to the appropriate page after successful signin
      } else {
        toast.error('Invalid email or password');
      }

      // Get additional data from the signup response
      const additionalData = data.additionalData;
      console.log('Additional data from signup:', additionalData);
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('An error occurred while signing in');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
