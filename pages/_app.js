import {useEffect} from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../design/navbar.css'
import '../design/common.css'
import '../design/svg.css'
import '../design/homepage.css'
import '../design/service.css'
import '../design/products.css'
import '../design/logo.css'
import '../design/testimonial.css'
import '../design/footer.css'
import '../design/media.css'

function MyApp({ Component, pageProps }) {

   useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
