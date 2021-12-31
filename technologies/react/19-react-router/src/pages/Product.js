import { Link } from "react-router-dom";
import React from "react";

function Product() {
  return (
    <div>
      <h1>Product page</h1>
      <ul>
        <li><Link to="/products/p1">Book</Link ></li>
        <li><Link to="/products/p2">Carpet</Link ></li>
        <li><Link to="/products/p3">Nintendo 64</Link ></li>
      </ul>
    </div>
  );
}

export default Product;
