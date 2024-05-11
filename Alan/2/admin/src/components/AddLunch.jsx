import React, { useState } from 'react';
import { Card, CardContent, Grid, Table, TableContainer, TableRow, Typography, TextField, Button, Paper, TableCell } from '@mui/material';
import axios from 'axios';

export const AddLunch = () => {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    image: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const addHandler = () => {
    axios.post("http://localhost:4040/add3", inputs)
      .then((result) => {
        alert(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <br /><br /><br /><br />
      <br />
      <Typography variant='h3' color='primary'>Add Lunch Item</Typography><br /><br />
      <Grid container justifyContent="center" alignItems="center">
        <Card elevation={3}>
          <CardContent>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }} aria-label="add breakfast item table">
                <TableRow>
                  <TableCell><Typography variant='body1'>Name of Food:</Typography></TableCell>
                  <TableCell>
                    <TextField
                      label=""
                      name='name'
                      value={inputs.name}
                      onChange={inputHandler}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant='body1'>Price:</Typography></TableCell>
                  <TableCell>
                    <TextField
                      label=""
                      name='price'
                      value={inputs.price}
                      onChange={inputHandler}
                      type="number"
                      InputProps={{ inputProps: { min: 0 } }}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant='body1'>Image Link:</Typography></TableCell>
                  <TableCell>
                    <TextField
                      label=""
                      name='image'
                      value={inputs.image}
                      onChange={inputHandler}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={addHandler}
                      color='primary'
                      size="medium"
                    >
                      Submit
                    </Button>
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};
