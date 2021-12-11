import React from "react";
import CartContext from "./cart-context";

// this is a provider component
// so any children component that needs access to CartContext
// will consume from this component
// we will also store all the logics from cart management here
function CartProvider(props) {
  const addItemToCartHandler = (item) => {
    console.log("ADDING ITEM");
  };

  const removeItemFromCartHandler = (id) => {
    console.log("REMOVING ITEM");
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider
      value={{
        items: cartContext.items,
        totalAmount: cartContext.totalAmount,
        addItem: cartContext.addItem,
        removeItem: cartContext.removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
