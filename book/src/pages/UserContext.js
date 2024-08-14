import React, { createContext, useState, useEffect } from 'react';

// Create the UserContext
export const UserContext = createContext();

// UserProvider component to provide user state
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to simulate login (replace with actual authentication logic)
  const login = (userData) => {
    setUser(userData);
  };

  // Function to simulate logout
  const logout = () => {
    setUser(null);
  };

  // Optional: Initialize user from localStorage or API
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;