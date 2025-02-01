import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function InvestmentCard() {
  return (
    <Card sx={{
      minWidth: 275,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      margin: '1rem',
      padding: '1rem'
    }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom variant="h6">
          Investment
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" component="div">
            $90,524
          </Typography>
          <Typography variant="body2" color="green">
            +5.08% Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default InvestmentCard;
