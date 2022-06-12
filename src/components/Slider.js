import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data.js";
import { Link } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="Slider-container">
      <div
        className="Slider-arrow Slider-arrow-left"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        className="Slider-wrapper"
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className="Slider-slide"
            style={{ backgroundColor: `#${item.bg}` }}
          >
            <div className="Slider-image-container">
              <img className="Slider-image" src={item.img} alt="" />
            </div>
            <div className="Slider-info-container">
              <h1 className="Slider-title">{item.title}</h1>
              <p className="Slider-descp">{item.desc}</p>
              <button className="Slider-button">
                <Link className="link" to="/Productlist">
                  SHOW NOW
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="Slider-arrow Slider-arrow-right"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
