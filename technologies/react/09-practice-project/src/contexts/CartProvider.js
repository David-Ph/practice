import React from "react";
import CartContext from "./cart-context";

// this is a provider component
// so any children component that needs access to CartContext
// will consume from this component
function CartProvider(props) {
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
}

export default CartProvider;
