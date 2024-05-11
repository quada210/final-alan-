import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, Button, InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

export const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === 'mercato@gmail.com' && password === 'mercato123') {
      navigate('/feed');
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Card sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
          <CardContent>
            <TextField
              label="Email"
              variant="filled"
              name='email'
              type='email'
              focused
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: 'white' }} />
                  </InputAdornment>
                ),
              }}
            />
            <br /><br /><br />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              focused
              autoComplete="current-password"
              variant="standard"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon sx={{ color: 'white' }} />
                  </InputAdornment>
                ),
              }}
            />
            <br /><br /><br />
            <Button variant="contained" color='success' onClick={handleSubmit}>
              Sign in
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};
