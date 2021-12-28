import { createSlice, createStore } from "@reduxjs/toolkit";

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
      if (!findItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        findItem.quantity++;
        findItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {},
  },
});
