import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Replace useHistory with useNavigate
import './signup.css';
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();  // Use useNavigate for navigation

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users/register";
      const { data: res } = await axios.post(url, data);
      console.log(res);  // You can handle success messages here
      navigate("/home");  // Redirect to home on success
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data);
      }
    }
  };

  return (
    <div className={`signup_container ${isTransitioning ? 'form_container_transition' : ""}`}>
      <div className={`signup_form_container ${isTransitioning ? 'form_container_transition_reverse' : ""}`}>
        <div className={`left ${isTransitioning ? 'slideOut' : 'slideIn'}`}>
          <h1>Welcome Back</h1>
          <button type="button" className="white_btn" onClick={() => setIsTransitioning(true)}>Sign in</button>
        </div>
        <div className={`right ${isTransitioning ? 'slideOut' : 'slideIn'}`}>
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="input"
            />
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
            <button type="submit" className="green_btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
