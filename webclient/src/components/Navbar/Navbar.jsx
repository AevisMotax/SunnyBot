import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Fab } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';  // Import MenuIcon
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // For the popup button
import SunLifeLogo from '../../assets/sunAILogo.webp'; // Make sure to add the logo to the 'assets' folder or wherever you store your images

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(true);

  const toggleNavbarPopup = (open) => {
    setOpenNavbar(open);
  }


  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          width:'200px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'width 0.3s ease', // Smooth transition for opening and closing
        }}
      >
        <Toolbar sx={{ flexDirection: 'column', alignItems: 'flex-start', padding: 2 }}>
          {/* Logo and Menu Toggle Icon */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              //onClick={toggleNavbarPopup(false)}
              sx={{ mr: 2, mb: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img src={SunLifeLogo} alt="Sun Life Logo" style={{ width: "115%", height: '50%' }} />
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              <Link to="/balance" style={{ textDecoration: 'none', color: 'white' }}>Bank Balance</Link>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About Sun Life</Link>
            </Typography>

            {/*  User Icon */}
            <Typography variant="h6" sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                  User Profile
                </Link>
                <IconButton color="inherit" component={Link} to="/profile">
                  <AccountCircleIcon />
                </IconButton>
            </Typography>
          </Box>
        </Toolbar>

      </AppBar>

          {/* Floating button to open the navbar */}
          {/* {!openNavbar && (
        <Fab
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 20,
            left: 20,
            zIndex: 1301, // To place the button above the AppBar
          }}
          onClick={toggleNavbarPopup(true)}
        >
          <ArrowForwardIcon />
        </Fab>
      )} */}
    </>
  );
};

export default Navbar;
