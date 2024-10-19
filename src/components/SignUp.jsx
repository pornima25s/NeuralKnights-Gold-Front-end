import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; // Import CSS for styling
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('profile_picture', profilePic);

    if (!username || !password) {
        alert("Username and password are required.");
        return;
    }
    if (password.includes(username)) {
        alert("Password cannot be similar to username.");
        return;
    }
    

    try {
      // Sending the form data to the server
      const response = await axios.post('http://127.0.0.1:8000/auth/users/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Assuming the server sends a JWT token on successful signup
      const { token } = response.data;

      // Storing the JWT token in localStorage for future use (authentication)
    //   localStorage.setItem('access_token', response.data.access);
    //   localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('token', token);

      alert('Signed up successfully');
      
      // Navigate to the login page after successful sign-up
      navigate('/login');
      
    } catch (err) {
      
      console.error(err.response.data);
      setError(err.response.data.detail || 'Failed to sign up, please try again');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-popup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your username" 
              required 
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <div className="input-group">
            <label>
              <input 
                type="checkbox" 
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)} 
              />
              Show Password
            </label>
          </div>
          <div className="input-group">
            <label>First Name</label>
            <input 
              type="text" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} 
              placeholder="Enter your first name" 
              required 
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input 
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} 
              placeholder="Enter your last name" 
              required 
            />
          </div>
          <div className="input-group">
            <label>Profile Picture</label>
            <input 
              type="file" 
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-text">Already have an account? <Link to="/login">Log in here</Link></p>
      </div>
    </div>
  );
};

export default SignUp;