import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Service from '../components/Service'
import Products from '../components/Products'
import Logo from '../components/Logo'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
export default function Home() {
  return (
   <>
   <Navbar />
   <Homepage />
   <Service />
   <Products />
   <Logo />
   <Testimonial />
   <Footer />
   </>
  )
}
