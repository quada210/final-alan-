import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

const Order = () => {
    const [user, setUsers] = useState([]);
useEffect(() => {
    axios.get("http://localhost:4040/get6")
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);


  return (
        <div style={{margin:'4%'}}>
  <Grid container spacing={2}>
      {user.map((val,i)=>(
      <Grid item xs={12} sm={6} md={4} key={i}>
          <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography variant='h5' gutterBottom>
                                    Food:
                                </Typography>
                                {val.foodItems.map((food, index) => (
                                    <Typography variant='body1' key={index}>
                                        {food}
                                    </Typography>
                                ))}
          <Typography variant='h6'>
    Price: {val.totalPrice} 
</Typography>

          <Typography variant='h6'>
          Email : {val.email}
          </Typography>
          </CardContent>
         
          
      </Card>
        </Grid>
))}
  </Grid>
    </div>
  )
}

export default Order