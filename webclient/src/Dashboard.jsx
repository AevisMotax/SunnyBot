import React from 'react';
import BalanceCard from './components/BalanceCard';
import InvestmentCard from './components/InvestmentCard';

function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <BalanceCard />
      <InvestmentCard />
      {/* Include other cards or components here */}
    </div>
  );
}

export default Dashboard;
