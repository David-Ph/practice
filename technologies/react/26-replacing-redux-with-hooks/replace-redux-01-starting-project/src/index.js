import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import ProductsContextProvider from "./contexts/products-context";
import configureProductsStore from "./hooks-store/products-store";

// Now we call this function to initialize products store
configureProductsStore();

ReactDOM.render(
  // <ProductsContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductsContextProvider>
  document.getElementById("root")
);
