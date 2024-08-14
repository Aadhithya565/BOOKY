import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode';  
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FaGoogle } from 'react-icons/fa'; 
import axios from 'axios';  // Import axios for making API requests
import './login.css'; 

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    try {
      // Perform sign-in logic here
      const response = await axios.post('http://localhost:8080/api/auth/login', data); // Update with your API endpoint
      console.log('Login Success:', response.data);

      // Store the token or session data
      localStorage.setItem('token', response.data.token);

      // Navigate to home page
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleGoogleSuccess = (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      console.log('Google Login Success:', decoded);

      // Save the user data and navigate to the home page
      navigate('/home');
    } catch (error) {
      console.error('Failed to decode Google JWT:', error);
      setError('Google login failed. Please try again.');
    }
  };

  const handleGoogleFailure = (response) => {
    console.log('Google Login Failed:', response);
    setError('Google login failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="login_container">
        <div className={`login_form_container`}>
          <div className={`left ${isTransitioning ? 'small' : 'large'} ${isTransitioning ? 'slideOut' : 'slideIn'}`}>
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="input"
              />
              {error && <div className="error_msg">{error}</div>}
              <button type="submit" className="green_btn">
                Sign In
              </button>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleFailure}
                render={renderProps => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="google_bar_btn"
                  >
                    <FaGoogle className="google_icon" />
                  </button>
                )}
              />
            </form>
          </div>
          <div className={`right ${isTransitioning ? 'large' : 'small'} ${isTransitioning ? 'slideOut' : 'slideIn'}`}>
            <h1>New Here?</h1>
            <Link to="/signup" onClick={() => setIsTransitioning(true)}>
              <button type="button" className="white_btn">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
