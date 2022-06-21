import { useEffect } from 'react'
import { createFirebaseApp } from '../firebase';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("aca")
    createFirebaseApp();
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
