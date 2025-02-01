import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Assets() {
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
            Assets
          </Typography>
          <Typography variant="h4" component="div">
            Total Value : $432 000
          </Typography>
        </CardContent>
      </Card>
    );
  }
  

export default Assets;
