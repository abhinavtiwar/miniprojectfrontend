import React from 'react'
import Services from "../components/Services";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Works from "../components/Works";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
    
    <Services />
   
  <Experience />
  <Works />
  <Portfolio />
  <Testimonial />
  <Contact />
  <Footer />
    </div>
  )
}

export default Home