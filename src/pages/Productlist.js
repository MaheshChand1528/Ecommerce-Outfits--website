import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Productlist = () => {
  return (
    <>
      <div className="Productlist-div-container">
        <Announcement />
        <NavBar />
        <h1 className="Productlist-title">Dresses</h1>
        <div className="Productlist-filter-container">
          <div className="Productlist-filter">
            <span className="Productlist-span-filter-text">
              Filter Products:
            </span>
            <select className="Productlist-select">
              <option className="Productlist-option" disabled selected>
                Color
              </option>
              <option className="Productlist-option">White</option>
              <option className="Productlist-option">Black</option>
              <option className="Productlist-option">Red</option>
              <option className="Productlist-option">Blue</option>
              <option className="Productlist-option">Yellow</option>
              <option className="Productlist-option">Green</option>
            </select>
            <select className="Productlist-select">
              <option className="Productlist-option" disabled selected>
                Size
              </option>
              <option className="Productlist-option">XS</option>
              <option className="Productlist-option">S</option>
              <option className="Productlist-option">M</option>
              <option className="Productlist-option">L</option>
              <option className="Productlist-option">XL</option>
            </select>
          </div>
          <div className="Productlist-filter">
            <span className="Productlist-span-filter-text">Sort Products:</span>
            <select className="Productlist-select">
              <option className="Productlist-option" selected>
                Newest
              </option>
              <option className="Productlist-option">
                Price (Low to High)
              </option>
              <option className="Productlist-option">
                Price (High to Low)
              </option>
            </select>
          </div>
        </div>
        <Products />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Productlist;
