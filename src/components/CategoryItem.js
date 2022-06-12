import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <>
      <div className="CategoryItem-div-container">
        <img className="CategoryItem-image" src={item.img} alt="" />
        <div className="CategoryItem-info">
          <h1 className="CategoryItem-title">{item.title}</h1>
          <button className="CategoryItem-button">
            <Link className="link" to="/Productlist">
              SHOP NOW
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
