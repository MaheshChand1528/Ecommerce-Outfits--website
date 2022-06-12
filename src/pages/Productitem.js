import { Add, Remove } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";

const Productitem = () => {
  return (
    <>
      <div className="Productitem-container">
        <Announcement />
        <NavBar />
        <div className="Productitem-wrapper">
          <div className="Productitem-image-container">
            <img
              className="Productitem-image"
              src="https://i.ibb.co/S6qMxwr/jean.jpg"
              alt=""
            />
          </div>
          <div className="Productitem-info-container">
            <h1 className="Productitem-title">Denim Jumpsuit</h1>
            <p className="Productitem-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </p>
            <span className="Productitem-price">$ 20</span>
            <div className="Productitem-filter-container">
              <div className="Productitem-filter">
                <span className="Productitem-filter-title">Color</span>
                <div
                  className="Productitem-filter-color"
                  style={{ backgroundColor: "black" }}
                ></div>
                <div
                  className="Productitem-filter-color"
                  style={{ backgroundColor: "blue" }}
                ></div>
                <div
                  className="Productitem-filter-color"
                  style={{ backgroundColor: "grey" }}
                ></div>
              </div>
              <div className="Productitem-filter">
                <select className="Productitem-select">
                  <option className="Productitem-option" disabled selected>
                    Size
                  </option>
                  <option className="Productitem-option">XS</option>
                  <option className="Productitem-option">S</option>
                  <option className="Productitem-option">M</option>
                  <option className="Productitem-option">L</option>
                  <option className="Productitem-option">XL</option>
                </select>
              </div>
            </div>
            <div className="Productitem-add-container">
              <div className="Productitem-amount-container">
                <Remove style={{ cursor: "pointer" }} />
                <span className="Productitem-amount">1</span>
                <Add style={{ cursor: "pointer" }} />
              </div>
              <button className="Productitem-button">
                <Link className="link" to="/Cart">
                  ADD TO CART
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Productitem;
