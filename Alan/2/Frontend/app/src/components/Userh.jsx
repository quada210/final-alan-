import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import IconButton from '@mui/material/IconButton';

export const Userh = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuOpen1 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  // List of routes where you want to hide the navbar
  const hideNavbarRoutes = ['/home', '/con', '/sign', '/log','/contact','/dash'];

  // Check if the current route is in the list of routes to hide the navbar
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  if (hideNavbar) {
    return null; // Don't render the navbar
  }

  return (
    <div>
      <AppBar position='static' style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <img
            src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/169/2019/06/19094722/Mercato-Logo-Color-02-340x340.png"
            width="100"
            height="100"
alt='a'
          />
          <Typography variant='h4' color='Success'>MERCATO</Typography> &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
          <Button variant="text"><Link to={'/h2'} style={{ color: 'white', textDecoration: 'none' }}>Home </Link> </Button>
          &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
          <Button variant="text" style={{ color: 'white' }} onClick={handleMenuOpen1}>Menu</Button>
          <Button variant="text"><Link to={'/rev'} style={{ color: 'white', textDecoration: 'none' }}>Feedback </Link> </Button>
          <Button variant="text"><Link to={'/cart'} style={{ color: 'white', textDecoration: 'none' }}>Cart</Link> </Button>
          <Menu
            id="menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/mrng'} style={{ textDecoration: 'none', color: 'black' }}>Breakfast</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/lunch'} style={{ textDecoration: 'none', color: 'black' }}>Lunch</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/dinner'} style={{ textDecoration: 'none', color: 'black' }}>Dinner</Link>
            </MenuItem>
          </Menu>
          <IconButton color="primary" onClick={handleMenuOpen} style={{ marginLeft: "auto", backgroundColor: 'grey' }}>
            <AccountCircleRoundedIcon style={{ color: 'white' }} />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>Log out</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}
