import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <>
      <div className="Newsletter-div-container">
        <h1 className="Newsletter-title">Newsletter</h1>
        <div className="Newsletter-desc">
          Get timely updates from your favorite products.
        </div>
        <div className="Newsletter-input-container">
          <input className="Newsletter-input" placeholder="Your Email" />
          <button className="Newsletter-button">
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
