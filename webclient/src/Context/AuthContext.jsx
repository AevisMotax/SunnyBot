import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to access AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a provider component that will wrap your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Store the authenticated user data
  const [loading, setLoading] = useState(true);  // To handle the loading state while checking the authentication status

  useEffect(() => {
    // Check for stored user data (e.g., in localStorage) on component mount
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);  // Store the user data
    localStorage.setItem('user', JSON.stringify(userData));  // Store user data in localStorage (for persistence)
  };

  const logout = () => {
    setUser(null);  // Clear user data
    localStorage.removeItem('user');  // Remove user data from localStorage
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
