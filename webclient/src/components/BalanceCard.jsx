import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function BalanceCard() {
    return (
      <Card sx={{
        minWidth: 275,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        margin: '1rem',
        padding: '1rem'
      }}>
         <Link to="/balance" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <CardContent>
          <Typography color="text.secondary" gutterBottom variant="h6">
            Current Balance
          </Typography>
          <Typography variant="h4" component="div">
            $25,650
          </Typography>
        </CardContent>
        </Link>
      </Card>
    );
  }
  

export default BalanceCard;
