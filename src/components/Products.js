import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="Products-div-container">
        {popularProducts.map((item) => (
          <Product item={item} key={item.id}/>
        ))}
      </div>
    </>
  );
};

export default Products;
