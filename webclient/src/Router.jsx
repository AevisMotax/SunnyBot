import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import Navigation from './Navigation';
import Navbar from './components/Navbar/Navbar';
import BalanceCard from './components/BalanceCard'; // Import your BalanceCard component
import Dashboard from './Dashboard'; // Main dashboard component
// import OtherComponent from './components/OtherComponent'; // Other components for different pages

function Router() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate replace to="/Dashboard" />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/balance" element={<BalanceCard />} />
        {/* <Route path="/other" element={<OtherComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
