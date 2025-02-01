import React from 'react';
import { TextField } from '@mui/material';
import BalanceCard from './components/BalanceCard';
import InvestmentCard from './components/InvestmentCard';
import Spending from './components/Spending';
import Income from './components/Income';

function Dashboard() {
    const handleSearch = (event) => {
        // Here you can define what happens when the user presses Enter
        if (event.key === 'Enter') {
          console.log('Search:', event.target.value);
          // Prevent the default form submit behavior
          event.preventDefault();
        }
      };


    return (
        
    <div style={{ paddingLeft: '200px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {/* Your existing components */}
      
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          onKeyPress={handleSearch}
          sx={{ margin: '1rem' }}
        />  
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <div style={{ flexBasis: '45%', marginBottom: '20px' }}>
          <BalanceCard />
        </div>
        <div style={{ flexBasis: '45%', marginBottom: '20px' }}>
          <InvestmentCard />
        </div>
        {/* Example additional components */}
        <div style={{ flexBasis: '45%', marginBottom: '20px' }}>
          <Spending />
        </div>
        <div style={{ flexBasis: '45%', marginBottom: '20px' }}>
          <Income />
        </div>
      </div>
    </div>
    );
  }

export default Dashboard;
