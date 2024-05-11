import { Card, CardContent, Grid, Typography ,Button} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image from './Image/image.png';

export const Lunch = () => {
    const [user,setUsers]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4040/get2")
    .then(user => setUsers(user.data))
    .catch(err=> console.log(err))
  })
  const addHandler = (item) => {
    axios.post("http://localhost:4040/add5", item)
      .then((response) => {
        if (response.status === 200) {
          alert("Item added to cart");
        } else {
          alert(response.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert("This item is already in the cart.");
        } else {
          console.error(error);
          alert("Error: Unable to add item to cart. Please try again later.");
        }
      });
};
  const backgroundImageStyle={
    position:"fixed",
    top:'0',
    left:'0',
    width:"100%",
    height:"100%",
    zIndex: -1,
  };
 
  return (

  
   
              <div style={{margin:'4%'}}>
                <Typography variant='h3'>Lunch items</Typography><br />
                   <img src={image} alt="err" style={backgroundImageStyle}></img>
  <Grid container spacing={2}>
      {user.map((val,i)=>(
      <Grid item xs={12} sm={6} md={4} key={i}>
          <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <img src={val.image} class="card-img-top" alt="error"/>
          <Typography variant='h3' gutterBottom>
            {val.name}
          </Typography>
          <Typography variant='h6'>
          price : {val.price}
          </Typography>
          <Button
                  variant="contained"
                  color='success'
                  onClick={() => addHandler(val)}
                >
                     Add to cart
                </Button>

          </CardContent>
         
          
      </Card>
        </Grid>
))}
  </Grid>
    </div>
  )
}
