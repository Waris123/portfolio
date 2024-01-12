// src/app/pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css'; // Update the path

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Name - Software Engineer</title>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>

      {/* Your existing HTML content here */}
      <header className={styles.header}>
        <div className={styles.overlay}>
          <div className="container">
            <div className={styles.headerContent}>
              <div>
                <h1>Your Name</h1>
                <p className="lead">Software Engineer</p>
              </div>
              <div>
                <img src="https://placekitten.com/200/200" alt="Your Image" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Your Name</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">My Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home" className="py-5">
        <div className="container">
          <h2 className="text-center">Welcome to My Portfolio</h2>
          <p className="lead text-center">Insert your introduction and home content here.</p>
        </div>
      </section>

      <section id="portfolio" className="py-5">
        <div className="container">
          <h2 className="text-center">My Portfolio</h2>
          <p className="lead text-center">Insert your portfolio content and projects here.</p>
        </div>
      </section>

      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center">About Me</h2>
          <p className="lead text-center">Insert information about yourself and your skills here.</p>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center">Contact</h2>
          <p className="lead text-center">Insert your contact information and a contact form here.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.icons}>
              <i className="fab fa-laravel"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-js"></i>
            </div>
            <div>
              &copy; 2023 Your Name - Software Engineer
            </div>
            <div className={styles.socialIcons}>
              <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
