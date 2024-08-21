import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={styles.container}>
     
      <main style={styles.main}>
        <h1>About Me</h1>
        <section style={styles.section}>
          <h2>Who I Am</h2>
          <p>
            Hello! I'm MIAN MAMOON SHAH, a passionate full-stack developer with over 1 years of experience in building
            modern web applications. My expertise lies in both frontend and backend development, allowing me to create
            comprehensive and efficient solutions.
          </p>
        </section>
        <section style={styles.section}>
          <h2>My Skills</h2>
          <ul style={styles.list}>
            <li>Frontend: HTML, CSS, JavaScript, React, Angular, Vue</li>
            <li>Backend: Node.js, Express, Python, Django, Ruby on Rails</li>
            <li>Databases: MongoDB, MySQL, PostgreSQL</li>
            <li>Tools & Technologies: Git, Docker, AWS, Firebase</li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2>Experience</h2>
          <p>
            Over the years, I've had the opportunity to work on a variety of projects, from small startups to large
            enterprises. My role has often involved designing and implementing scalable solutions, collaborating with
            cross-functional teams, and ensuring the highest quality of deliverables.
          </p>
        </section>
        <section style={styles.section}>
          <h2>Contact Me</h2>
          <p>
            If you'd like to discuss potential opportunities or just want to connect, feel free to <a href="mailto:mianmn009@gmail.com" style={styles.link}>email me</a>.
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

export default About;
