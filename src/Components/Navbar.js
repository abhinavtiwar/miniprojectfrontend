import React from "react";
import Toggle from "./Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Abhinav</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
          
            <li>
              <NavLink to="home" spy={true} smooth={true}>
                Home
              </NavLink>
            </li>
          
            <li>
              <NavLink to="services" spy={true} smooth={true}>
                Serivces
              </NavLink>
            </li>
            <li>
              <NavLink to="works" spy={true} smooth={true}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolio" spy={true} smooth={true}>
                Protfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="testimonial" spy={true} smooth={true}>
                Testimonial
              </NavLink>
            </li>
            <li>
              <NavLink to="upload" spy={true} smooth={true}>
                UploadFile
              </NavLink>
              </li>
           
            <li>
              <NavLink to="login" spy={true} smooth={true}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="signuppage" spy={true} smooth={true}>
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;