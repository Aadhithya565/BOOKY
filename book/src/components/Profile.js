import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const MyAccount = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing auth tokens)
    navigate('/');
  };

  return (
    <div className="account-container">
      <h1 className="account-title">My Account</h1>
      <div className="account-section account-info">
        <h2 className="account-subtitle">Account Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Phone:</strong> 123-456-7890</p>
        <p><strong>Address:</strong> 123 Main St, Springfield, IL 62701</p>
      </div>
      <div className="account-section order-history">
        <h2 className="account-subtitle">Order History</h2>
        <ul>
          <li>Order #1234 - <strong>Completed</strong> - <em>07/15/2024</em></li>
          <li>Order #1235 - <strong>Shipped</strong> - <em>07/20/2024</em></li>
          <li>Order #1236 - <strong>Processing</strong> - <em>07/25/2024</em></li>
        </ul>
      </div>
      <div className="account-section saved-addresses">
        <h2 className="account-subtitle">Saved Addresses</h2>
        <p>123 Main St, Springfield, IL 62701</p>
        <p>456 Elm St, Shelbyville, IL 62565</p>
        <button className="account-button">Add New Address</button>
      </div>
      <div className="account-section payment-methods">
        <h2 className="account-subtitle">Payment Methods</h2>
        <p>Visa **** **** **** 1234 - Exp. 12/24</p>
        <p>Mastercard **** **** **** 5678 - Exp. 11/23</p>
        <button className="account-button">Add New Payment Method</button>
      </div>
      <div className="account-section account-actions">
        <button className="account-button">Edit Profile</button>
        <button className="account-button">Change Password</button>
        <button className="account-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default MyAccount;
