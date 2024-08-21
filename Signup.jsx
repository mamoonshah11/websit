import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { auth } from '../Component/firebase';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home page after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={handleSignup} style={{ width: '100%', marginTop: '20px' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Sign Up
          </Button>
          {error && <Typography color="error" style={{ marginTop: '20px' }}>{error}</Typography>}
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
