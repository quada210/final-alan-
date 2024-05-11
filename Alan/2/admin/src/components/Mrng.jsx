import React, { useEffect, useState } from 'react';
import image from './Image/image.png';
import { Card, CardContent, Grid, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';

export const Mrng = () => {
  const [user, setUsers] = useState([]);
  const [updateId, setUpdateId] = useState(null); // State to track the ID of the item being updated
  const [updateData, setUpdateData] = useState({}); // State to store updated data

  useEffect(() => {
    axios.get("http://localhost:4040/get1")
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  const deleteValue = (id) => {
    axios.delete("http://localhost:4040/remove/" + id)
      .then((response) => {
        alert(response.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  const updateValues = (val) => {
    setUpdateId(val._id);
    setUpdateData({ name: val.name, price: val.price, image: val.image });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:4040/edit/${updateId}`, updateData)
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
      <br /><br />
      <Typography variant='h3'>Breakfast items</Typography><br />
      <img src={image} alt="err" style={backgroundImageStyle} />

      <Grid container spacing={2}>
        {user.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <img src={val.image} className="card-img-top" alt="error" />
                <Typography variant='h3' gutterBottom>
                  {val.name}
                </Typography>
                <Typography variant='h6'>
                  price : {val.price}
                </Typography>
                <Button onClick={() => deleteValue(val._id)} size="small" variant='contained' color='secondary'>
                  Delete
                </Button>
                <Button
                  onClick={() => updateValues(val)}
                  size="small"
                  variant='contained'
                  color='warning'>
                  Update
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Update Form */}
      {updateId && (
        <div>
          <Typography variant='h4'>Update Item</Typography>
          <form  style={{backgroundColor:'white'}}>
            <TextField
              label="Name"
              name="name"
             
              value={updateData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              name="price"
              value={updateData.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Image"
              name="image"
              value={updateData.image}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleUpdate} variant='contained' color='primary'>
              Update
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
