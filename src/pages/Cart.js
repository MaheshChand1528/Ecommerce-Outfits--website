import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Cart = () => {
  return (
    <>
      <div className="Cart-Container">
        <NavBar />
        <Announcement />
        <div className="Cart-wrapper">
          <h1 className="Cart-title">YOUR BAG</h1>
          <div className="Cart-top">
            <button
              className="Cart-top-button"
              style={{ backgroundColor: "transparent" }}
            >
              CONTINUE SHOPPING
            </button>
            <div className="Cart-TopTexts">
              <span className="Cart-TopText">Shopping Bag(2)</span>
              <span className="Cart-TopText">Your Wishlist (0)</span>
            </div>
            <button
              className="Cart-top-button"
              style={{
                color: "white",
                backgroundColor: "black ",
                border: "none",
              }}
            >
              CHECKOUT NOW
            </button>
          </div>
          <div className="Cart-bottom">
            <div className="Cart-info">
              <div className="Cart-product">
                <div className="Cart-ProductDetail">
                  <img
                    className="Cart-Image"
                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  />
                  <div className="Cart-Details">
                    <span className="Cart-ProductName">
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </span>
                    <span className="Cart-ProductId">
                      <b>ID:</b> 93813718293
                    </span>
                    <div
                      className="Cart-ProductColor"
                      style={{ backgroundColor: "black" }}
                    />
                    <span className="Cart-ProductSize">
                      <b>Size:</b> 37.5
                    </span>
                  </div>
                </div>
                <div className="Cart-PriceDetail">
                  <div className="Cart-ProductAmountContainer">
                    <AddIcon />
                    <div className="Cart-ProductAmount">2</div>
                    <RemoveIcon />
                  </div>
                  <div className="Cart-ProductPrice">$ 30</div>
                </div>
              </div>
              <hr className="Cart-hr" />
              <div className="Cart-product">
                <div className="Cart-ProductDetail">
                  <img
                    className="Cart-Image"
                    src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  />
                  <div className="Cart-Details">
                    <span className="Cart-ProductName">
                      <b>Product:</b> HAKURA T-SHIRT
                    </span>
                    <span className="Cart-ProductId">
                      <b>ID:</b> 93813718293
                    </span>
                    <div
                      className="Cart-ProductColor"
                      style={{ backgroundColor: "gray" }}
                    />
                    <span className="Cart-ProductSize">
                      <b>Size:</b> M
                    </span>
                  </div>
                </div>
                <div className="Cart-PriceDetail">
                  <div className="Cart-ProductAmountContainer">
                    <AddIcon />
                    <div className="Cart-ProductAmount">1</div>
                    <RemoveIcon />
                  </div>
                  <div className="Cart-ProductPrice">$ 20</div>
                </div>
              </div>
            </div>
            <div className="Cart-Summary">
              <h1 className="Cart-SummaryTitle">ORDER SUMMARY</h1>
              <div className="Cart-SummaryItem">
                <span className="SummaryItemText">Subtotal</span>
                <span className="SummaryItemPrice">$ 80</span>
              </div>
              <div className="Cart-SummaryItem">
                <span className="SummaryItemText">Estimated Shipping</span>
                <span className="SummaryItemPrice">$ 5.90</span>
              </div>
              <div className="Cart-SummaryItem">
                <span className="SummaryItemText">Shipping Discount</span>
                <span className="SummaryItemPrice">$ -5.90</span>
              </div>
              <div
                className="Cart-SummaryItem"
                type="total"
                style={{ fontWeight: "500", fontSize: "24px" }}
              >
                <span className="Cart-SummaryItemText">Total</span>
                <span className="Cart-SummaryItemPrice">$ 80</span>
              </div>
              <button className="Cart-Button">CHECKOUT NOW</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
