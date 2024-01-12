// src/app/pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min').then(() => {
      // Bootstrap JS has been loaded
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
