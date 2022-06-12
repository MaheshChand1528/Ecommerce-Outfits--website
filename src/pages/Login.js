import React from "react";

const Login = () => {
  return (
    <>
      <div className="Login-container">
        <div className="Login-wrapper">
          <h1 className="Login-title">SIGN IN</h1>
          <form className="Login-form">
            <input className="Login-input" placeholder="username" />
            <input className="Login-input" placeholder="password" />
            <button className="Login-button">LOGIN</button>
            <a className="Login-link">DO NOT YOU REMEMBER THE PASSWORD?</a>
            <a className="Login-link">CREATE A NEW ACCOUNT</a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
