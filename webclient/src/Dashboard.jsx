import React, { useState, useEffect } from 'react';
import { TextField, Dialog } from '@mui/material';
import BalanceCard from './components/BalanceCard';
import InvestmentCard from './components/InvestmentCard';
import Mortgage from './components/Mortgage';
import Spending from './components/Spending';
import Assets from './components/AssetsCard';
import Income from './components/Income';
import PopupBotWindow from './components/PopupBotWindow';


function Dashboard() {
  const [searchInput, setSearchInput] = useState("");
  const [openPopup,  setOpenPopup] = useState(false); //to open chatbot popup window

    const handleSearch = (event) => {
      if (event.key === 'Enter') {
        // Prevent the default form submit behavior
        event.preventDefault();
        console.log('Search:', event.target.value);
        setOpenPopup(true);
      }
    };

    return (
        
    <div style={{ }}>
        {/* Your existing components */}
      
        <TextField
          fullWidth
          label="Ask SunAI for financial advice:"
          variant="outlined"
          onKeyPress={handleSearch}
          onChange={(e) => setSearchInput(e.target.value)}
          sx={{ margin: '1rem' }}
        />  

        {/* Chat Popup */}
        <Dialog open={openPopup} onClose={() => setOpenPopup(false)} fullWidth maxWidth="xl">
          <PopupBotWindow searchQuery={searchInput} onClose={() => setOpenPopup(false)} />
        </Dialog>

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
        <div style={{ flexBasis: '45%', marginBottom: '20px' }}>
          <Mortgage />
        </div>
        <div style={{ flexBasis: '45%', marginBottom: '20px' }}>
          <Assets />
        </div>
      </div>
    </div>
    );
  }

export default Dashboard;
