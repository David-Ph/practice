import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const findItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!findItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const findItem = state.items.find((item) => item.id === id);
      if (findItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        findItem.quantity--;
        state.totalQuantity--;
        findItem.totalPrice -= findItem.price;
      }
    },
  },
});

// this is a thunk function
export const sendCartData = (cart) => {
  // when we dispatch this, the dispatch will also automatically
  // pass the dispatch itself as an argument, so we can call the dispatch again inside here
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://learn-react-c51fe-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data success!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Send cart data failed!",
        })
      );
    }

    // const data = await response.json();
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
