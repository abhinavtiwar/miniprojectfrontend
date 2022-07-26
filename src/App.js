
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Works from "./Components/Works";
import Portfolio from "./Components/Portfolio";
import Testimonial from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
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
