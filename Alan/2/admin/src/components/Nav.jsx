import { AppBar, Toolbar ,Button,Typography, Menu, MenuItem} from '@mui/material'
import { useLocation } from 'react-router-dom'; // Import useLocation hook

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
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
  const navbarStyle = {
    backgroundColor: '#181919', // Set the background color of the navbar
    color: 'white', // Set the text color of the navbar
    padding: '10px' // Add padding to the navbar
  };
 
  const location = useLocation(); // Use useLocation hook to get the current location

  const hideNavbarRoutes = ['/sign']; // Update this array to include routes where you want to hide the navbar

  // Check if the current route is in the list of routes to hide the navbar
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  if (hideNavbar) {
    return null; // Don't render the navbar
  }
  return (
    <div>
        <AppBar style={navbarStyle}>
            <Toolbar>
            <img 
                    src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/169/2019/06/19094722/Mercato-Logo-Color-02-340x340.png"
                    
                    width="100" height="100"
                /> 
              
                <Typography variant='h4' color='Success'>MERCATO(admin)</Typography>

                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                <Button variant="text"><Link to={'/feed'} style={{textDecoration: 'none',color :'white'}}>Feedbacks </Link> </Button>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                <Button variant="text"><Link to={'/user'} style={{textDecoration: 'none',color :'white'}}>User </Link> </Button>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                <Button variant="text"><Link to={'/order'} style={{textDecoration: 'none',color :'white'}}>Order </Link> </Button>   &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                <Button variant="text"><Link to={'/contact'} style={{textDecoration: 'none',color :'white'}}>Contact </Link> </Button>   &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                <Button variant="text" style={{ color: 'white' }} onClick={handleMenuOpen}>Add Item</Button>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
               < Button variant="text" style={{ color: 'white' }} onClick={handleMenuOpen1}>Items added</Button>
                <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/break'} style={{ textDecoration: 'none', color: 'black' }}>Add breakfast</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/alunch'} style={{ textDecoration: 'none', color: 'black' }}>Add Lunch</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/adinner'} style={{ textDecoration: 'none', color: 'black' }}>Add Dinner</Link>
            </MenuItem>
          </Menu>
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
            <Button variant="contained" color='success'  style={{marginLeft:"auto"}}>  <Link to={'/sign'} style={{ textDecoration: 'none', color: 'black' }}>logout</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}
