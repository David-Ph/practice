import React, { useReducer } from "react";
import CartContext from "./cart-context";

// this is a provider component
// so any children component that needs access to CartContext
// will consume from this component
// we will also store all the logics from cart management here

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // the reason why we use concat instead of push
    // is because we want to create a brand new array instead of updating
    // previous state
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const findItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const findItem = state.items[findItemIndex];
    let updatedItems;

    if (findItem) {
      const updatedItem = {
        ...findItem,
        amount: findItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[findItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const findItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const findItem = state.items[findItemIndex];
    const updatedTotalAmount = state.totalAmount - findItem.price;

    let updatedItems;

    if (findItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...findItem, amount: findItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[findItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCart;
};

function CartProvider(props) {
  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCart);

  const addItemToCartHandler = (item) => {
    cartDispatcher({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    cartDispatcher({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
