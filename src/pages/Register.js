import React from "react";

const Register = () => {
  return (
    <>
      <div className="Register-container">
        <div className="Register-wrapper">
          <h1 className="Register-title">CREATE AN ACCOUNT</h1>
          <form className="Register-form">
            <input className="Register-input" placeholder="name" />
            <input className="Register-input" placeholder="last name" />
            <input className="Register-input" placeholder="username" />
            <input className="Register-input" placeholder="email" />
            <input className="Register-input" placeholder="password" />
            <input className="Register-input" placeholder="confirm password" />
            <span className="Register-agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button className="Register-button">CREATE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
