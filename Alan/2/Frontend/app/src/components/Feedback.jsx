import React, { useState } from 'react';
import { Typography, TextField, Grid, InputAdornment, Button, TableContainer, TableRow, TableCell, Paper, Table, Card, CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';
import Rating from '@mui/material/Rating'; // Import Rating component
import Img from './Image/bgfeed.jpg';

export const Feedback = () => {
  const [inputs, setInputs] = useState({
    email: "",
    review: "",
    rating: "",// Add rating field to state
  });
 
  const inputHandler = (e) => {
    const { name, value } = e.target;

    // Always update the input value
    setInputs((prevData) => ({ ...prevData, [name]: value }));

    // Validate email field
    if (name === 'email') {
      const isValid = /\S+@\S+\.\S+/.test(value); // Regex for email validation
      if (!isValid) {
        // Don't clear the email field if it's not valid
        return;
      }
    }
  };

  const addHandler = () => {
    axios.post("http://localhost:4040/add1", inputs)
      .then((result) => {
        alert(result.data);
      })
      .catch((err) => console.log(err));
  };

  const backgroundImage = {
    position: "fixed",
    left: '0',
    top: '0',
    height: "100%",
    width: "100%",
    zIndex: -1
  };

  return (
    <div>
      <Typography variant='h1' color={'black'}>Feedback</Typography><br /><br />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={Img}
          alt='img'
          style={backgroundImage} />
        <Card>
          <CardContent>
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 1 }} aria-label="simple table" >
                <TableRow>
                  <TableCell>Email:</TableCell>
                  <TableCell>
                    <TextField
                      variant="filled"
                      name='email'
                      type='text'
                      value={inputs.email}
                      onChange={inputHandler}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      style={{ cursor: 'pointer' }}
                      color="success"
                      focused
                      helperText="Please enter a valid email address"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Feedback:</TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-multiline-static"
                      label=""
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      name='review'
                      value={inputs.review}
                      onChange={inputHandler}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rating:</TableCell>
                  <TableCell>
                    <Rating
                      name="rating"
                      value={inputs.rating}
                      onChange={(event, newValue) => {
                        setInputs((prevData) => ({ ...prevData, rating: newValue }));
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={addHandler} color='success'>Submit</Button>
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}