import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, visible: true };

// so the way this works is
// first we import createSlice from redux tookit
// then we call it, and it receives an object as an argument
// it needs a name, an initial state, and all the methods we want it to be
// behind the scene, createSlice creates a copy of the state and gives us that copied state to work with
// so even if we're mutating it with state.counter++, the original state is still immutable.
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload.amount;
    },
    decrease(state, action) {
      state.counter -= action.payload.amount;
    },
    toggle(state) {
      state.visible = !state.visible;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;

