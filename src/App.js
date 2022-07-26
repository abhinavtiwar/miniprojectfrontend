
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UploadFile from "./components/UploadFile";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Intro from "./components/Intro";
import Login from "./components/Login";
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
        <Navbar />
        <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer /> 
          <Routes>
          
           
           
            <Route element={<UploadFile  />} path="upload" />
            <Route element={<Dashboard  />} path="dashboard" />
            <Route element={<Login  />} path="loginpage" />
            <Route element={<Signup  />} path="signuppage" />
            
            
            
           
           
          
          </Routes>
         
        </BrowserRouter>
    </div>
  );
}

 

export default App;
