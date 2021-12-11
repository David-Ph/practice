import React from "react";

// this is just to provide better auto completion
// because we will set the default value in the parent component
// treat this like interface
const CartContext = React.createContext({
  items: [],
  totalAmout: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;