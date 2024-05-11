import React, { useEffect, useState } from 'react';
import image from './Image/image.png';
import { Card, CardContent, Grid, Typography, Button } from '@mui/material';
import axios from 'axios';

export const User = () => {
  const [user, setUsers] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:4040/view")
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  const deleteValue = (id) => {
    axios.delete("http://localhost:4040/remov/" + id)
      .then((response) => {
        alert(response.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  

 


  const backgroundImageStyle = {
    position: "fixed",
    top: '0',
    left: '0',
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <div style={{ margin: '4%' }}>
      <br /><br /><br />
      <Typography variant='h3'>User</Typography><br />
      <img src={image} alt="err" style={backgroundImageStyle} />

      <Grid container spacing={2}>
        {user.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                
                <Typography variant='h3' gutterBottom>
                 name: {val.name}
                </Typography>
                <Typography variant='h6'>
                  email : {val.email}
                </Typography>
                <Button onClick={() => deleteValue(val._id)} size="small" variant='contained' color='secondary'>
                 Block
                </Button>
              
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    
     
      
    </div>
  );
};
