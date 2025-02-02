import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import Navigation from './Navigation';
import Navbar from './components/Navbar/Navbar';
import BalanceCard from './components/BalanceWindow'; 
import About from './components/about'; 
import Dashboard from './Dashboard'; // Main dashboard component
// import OtherComponent from './components/OtherComponent'; 

function Router() {
  return (
    <BrowserRouter>
      <div style={{ flexWrap: 'wrap', justifyContent: 'space-around',
                      display: 'flex', height: '100vh' }}>
        {/* Sidebar Navbar (Fixed Width) */}
        <div style={{  width:'200px', flexShrink: 0 }}>
          <Navbar />
        </div>

        {/* Main Content (Full Width minus Sidebar) */}
        <div style={{ flex: 1}}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/Dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/balance" element={<BalanceCard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
