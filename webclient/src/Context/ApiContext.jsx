// src/context/ApiContext.js
import React, { createContext, useContext } from 'react';
import { apiService } from '../util/querymanager';

// Create a context to provide access to the API service
const ApiContext = createContext();

// Create an API provider to wrap around the app
export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={apiService}>
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook to use API service
export const useApi = () => {
  return useContext(ApiContext);  // Returns the apiService functions
};
