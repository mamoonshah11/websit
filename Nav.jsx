import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase'; // Ensure you have the correct path
import { signOut } from 'firebase/auth';

const Navbar = ({ user }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to the login page or handle post-logout logic
      window.location.href = '/login';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/service" style={styles.link}>Service</Link>
      <Link to="/todo" style={styles.link}>To Do</Link> {/* Added To Do link */}
      {!user ? (
        <>
          <Link to="/signup" style={styles.link}>Sign Up</Link>
          <Link to="/login" style={styles.link}>Login</Link>
        </>
      ) : (
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  button: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Navbar;
