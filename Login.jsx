import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { auth } from '../Component/firebase';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home'); // Redirect to home page after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleLogin} style={{ width: '100%', marginTop: '20px' }}>
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
            Login
          </Button>
          {error && <Typography color="error" style={{ marginTop: '20px' }}>{error}</Typography>}
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
