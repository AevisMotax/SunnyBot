import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import BalanceCard from './components/BalanceCard'; // Import your BalanceCard component
// import Dashboard from './components/Dashboard'; // Main dashboard component
// import OtherComponent from './components/OtherComponent'; // Other components for different pages

function Router() {
  return (
    <BrowserRouter>
        <Navigation />
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/balance" element={<BalanceCard />} />
        {/* <Route path="/other" element={<OtherComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
