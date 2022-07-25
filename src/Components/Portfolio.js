import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../img/sidebar.png";
import Ecommerce from "../img/ecommerce.png";
import HOC from "../img/hoc.png";
import Pdf1 from "../img/pdf1.png";
import Compress1 from "../img/vidiocompress.jpg";
import Compress2 from "../img/vidiocompress1.jpg";
import Compress3 from "../img/3345.png";
import Pdf from "../img/thumbsnail.png";
import MusicApp from "../img/musicapp.png";
import { themeContext } from "../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>With Recent Projects</span>
      <span>Tool Used</span>

      {/* slider */}
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Pdf1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pdf} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Compress1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Compress2 } alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Compress3 } alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp } alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;