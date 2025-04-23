import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      alert(response.data.message);
      navigate('/dashboard'); // Redirect to a dashboard or home page
    } catch (err) {
      alert(err.response.data.message || 'Invalid credentials');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="input-field">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Enter your password</label>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>
            Don't have an account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;