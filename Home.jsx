import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <nav style={styles.navbar}>
         
        </nav>
      </header>
      <main style={styles.main}>
        <h1>Welcome to My Website</h1>
        <p>I am a full stack developer specializing in modern web technologies.</p>
        <button style={styles.button}>Explore My Work</button>
      </main>
      <footer style={styles.footer}>
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
};

export default Home;
