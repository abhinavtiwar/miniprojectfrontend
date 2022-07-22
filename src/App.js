
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Route element={<Intro />} path="intro" />
      <Route element={<Services />} path="services" />
      <Route element={<Experience />} path="experience" />
      <Route element={<Works />} path="works" />
      <Route element={<Portfolio />} path="portfolio" />
      <Route element={<Testimonial />} path="testimonial" />
      <Route element={<Contact />} path="contact" />
      <Route element={<Footer />} path="footer" />
    
    </Routes>
   
  </BrowserRouter>
    </div>
  );
}

 

export default App;
