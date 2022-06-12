import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <Link className="link" to="/Productitem">
      <div className="Product-div-container">
        <div className="Product-div-circle" />
        <img className="Product-image" src={item.img} alt="" />
        <div className="Product-div-info">
          <div className="Product-div-icon">
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="Product-div-icon">
            <SearchOutlinedIcon />
          </div>
          <div className="Product-div-icon">
            <FavoriteBorderOutlinedIcon />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
