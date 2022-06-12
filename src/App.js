import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./components/style1.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Productitem from "./pages/Productitem";
import Productlist from "./pages/Productlist";
import Register from "./pages/Register";
function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Cart" element={<Cart/>} />
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Productlist" element={<Productlist/>} />
          <Route exact path="/Productitem" element={<Productitem/>} />
          <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        </Routes>
        </BrowserRouter>
      {/* <Productlist/> */}
      {/* <Productitem /> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart /> */}
    </>
  );
}

export default App;
