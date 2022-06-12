import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <span className="navbar-language">EN</span>
            <div className="navbar-search-container">
              <input className="navbar-input" />
              <SearchIcon className="navbar-search-icon" />
            </div>
          </div>
          <div className="navbar-center">
            <h1 className="navbar-logo">
              <Link className="link" to="/">
                NARA.
              </Link>
            </h1>
          </div>
          <div className="navbar-right">
            <div className="navbar-menu-item">
              <Link className="link" to="/Register">
                Register
              </Link>
            </div>
            <div className="navbar-menu-item">
              <Link className="link" to="/Login">
                Sign In
              </Link>
            </div>
            <div className="navbar-menu-item">
              <Link className="link" to="/Cart">
                <ShoppingCartOutlinedIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
