import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function BalanceCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Current Balance
        </Typography>
        <Typography variant="h5" component="div">
          $25,650
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BalanceCard;
