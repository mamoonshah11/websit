import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useAuth } from '../Component/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../Component/firebase';


const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to login page or handle logout state
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Website
        </Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/home">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/service">Service</Button>
            <Button color="inherit" component={Link} to="/ToDo">Todo </Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
            
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
