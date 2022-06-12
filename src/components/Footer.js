import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const Footer = () => {
  return (
    <>
      <div className="Footer-div-container">
        <div className="Footer-div-left">
          <h1 className="Footer-logo">NARA.</h1>
          <p className="Footer-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <div className="Footer-div-social-container">
            <div className="Footer-div-social-icon fb" color="#3B5999">
              <FacebookOutlinedIcon />
            </div>
            <div className="Footer-div-social-icon insta" color="#E4405F">
              <InstagramIcon />
            </div>
            <div className="Footer-div-social-icon pinterest" color="#55ACEE">
              <PinterestIcon />
            </div>
            <div className="Footer-div-social-icon twitter" color="#E60023">
              <TwitterIcon />
            </div>
          </div>
        </div>
        <div className="Footer-div-center">
          <h3 className="Footer-title">Useful Links</h3>
          <ul className="Footer-list">
            <li className="Footer-list-item">Home</li>
            <li className="Footer-list-item">Cart</li>
            <li className="Footer-list-item">Man Fashion</li>
            <li className="Footer-list-item">Woman Fashion</li>
            <li className="Footer-list-item">Accessories</li>
            <li className="Footer-list-item">My Account</li>
            <li className="Footer-list-item">Order Tracking</li>
            <li className="Footer-list-item">Wishlist</li>
            <li className="Footer-list-item">Wishlist</li>
            <li className="Footer-list-item">Terms</li>
          </ul>
        </div>
        <div className="Footer-div-right">
          <h3 className="Footer-title">Contact</h3>
          <div className="Footer-contact-item">
            <RoomIcon style={{ marginRight: "10px" }} /> 622 Dixie Path , South
            Tobinchester 98336
          </div>
          <div className="Footer-contact-item">
            <PhoneIcon style={{ marginRight: "10px" }} />
            +1 234 56 78
          </div>
          <div className="Footer-contact-item">
            <MailOutlinedIcon style={{ marginRight: "10px" }} />
            contact@Nara.com
          </div>
          <img
            className="Footer-payment"
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
