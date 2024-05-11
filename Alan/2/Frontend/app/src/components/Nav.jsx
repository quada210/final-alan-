import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/rev','/mrng','/lunch','/dinner','/h2','/cart'];

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
            width="100" height="100"
            alt="logo"
          />
          <Typography variant='h4' color='Success'>MERCATO</Typography>
          &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
          <Button variant="text"><Link to={'/home'} style={{ color: 'white', textDecoration: 'none' }}>Home </Link> </Button>
          <Button variant="text"><Link to={'/dash'} style={{ color: 'white', textDecoration: 'none' }}>Dashboard </Link> </Button>
          <Button variant="text"><Link to={'/contact'} style={{ color: 'white', textDecoration: 'none' }}>Contact us </Link> </Button>
          <Button variant="outlined" style={{ marginLeft: 'auto' }}><Link to={'/sign'} style={{ color: 'white', textDecoration: 'none' }}>Login</Link></Button>
          &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
          <Button variant="outlined" ><Link to={'/log'} style={{ color: 'white', textDecoration: 'none' }}>Registration</Link></Button>
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
         
         
        </Toolbar>
      </AppBar>
    </div>
  );
};
