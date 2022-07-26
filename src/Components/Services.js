import React, { useContext } from "react";
import "./Services.css";
import Card from "./Card";
import HeartEmoji from "../img/heartemoji.png";
import Glasses from "../img/glasses.png";
import Humble from "../img/humble.png";
import { themeContext } from "../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
        <strong> Preview Generator is Tool or a Software which is Used to make</strong>
          <br />
          <strong>Preview of PDF ,Videos,Images</strong>
          <br />
          <strong>Or Any Document in a Reduced Size</strong>
          <br />
          <strong>And Preview the Document in efficient way.</strong>
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download Document</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Videos"}
            detail={"With this tool preview of vidio is generated in reduced size as we want"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"PDF"}
            detail={"With the help of this Tool any PDF file can be prewieved easily"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Images"}
            detail={
             "With the help of This Tool any Images can be prewieved easily"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;