import React from 'react';

const ServicePage = () => {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h1>Our Services</h1>
        <section style={styles.section}>
          <h2>What We Offer</h2>
          <p>
            As a full-stack web developer, I provide comprehensive solutions to meet your digital needs. My services include both frontend and backend development to create seamless and efficient web applications.
          </p>
        </section>
        <section style={styles.section}>
          <h2>Frontend Development</h2>
          <ul style={styles.list}>
            <li>Building responsive and interactive user interfaces using React and Material-UI.</li>
            <li>Ensuring cross-browser compatibility and optimal performance.</li>
            <li>Implementing modern design principles and user-centric features.</li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2>Backend Development</h2>
          <ul style={styles.list}>
            <li>Integrating with backend services using Node.js and Express.</li>
            <li>Setting up databases with MongoDB, MySQL, or PostgreSQL.</li>
            <li>Handling authentication and authorization with Firebase.</li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2>Custom Solutions</h2>
          <p>
            Whether you need a custom feature, a complete website overhaul, or a tailored solution for your business, I deliver high-quality, user-friendly applications that meet your specific requirements.
          </p>
        </section>
        <section style={styles.section}>
          <h2>Contact Me</h2>
          <p>
            Interested in working together or have any questions? Feel free to <a href="mailto:mianmn009@gmail.com" style={styles.link}>email me</a>.
          </p>
        </section>
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
  main: {
    flex: 1,
    padding: '20px',
    textAlign: 'center',
  },
  section: {
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
};

export default ServicePage;
