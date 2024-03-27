import React, { useState } from "react";
import axios from 'axios';
import "./Signup.css"; // Import the CSS file
import { toast } from "sonner";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('userName', username);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('image', profilePicture);

      const {data}= await axios.post(`/auth/signup`,formData,{headers:{"Content-Type":'multipart/form'}});
      if(data.message=="success"){
        toast.success('User Create Successfuly')
      }
    } 
    catch (error) {
      console.error('Error signing up:', error);
      toast.error('An error occurred while signing up');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="image">Profile Picture:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setProfilePicture(e.target.files[0])}
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

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

export default Signup;
