
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context"; 



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
    <BrowserRouter>
         
    <Routes>
      <Route element={<Navbar />} path="Navbar" />
      <Route element={<Intro />} path="intropage" />
      <Route element={<Services />} path="services" />
      <Route element={<Experience />} path="experiencepage" />
      <Route element={<Works />} path="works" />
      <Route element={<Portfolio />} path="portfolio" />
      <Route element={<Testimonial />} path="testimonial" />
      <Route element={<Contact />} path="contact" />
      <Route element={<Footer />} path="footerpage" />
    
    </Routes>
   
  </BrowserRouter>
    </div>
  );
}

 

export default App;
