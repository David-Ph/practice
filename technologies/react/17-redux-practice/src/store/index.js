// import { connect } from 'react-redux'
// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, visible: true };

// so the way this works is
// first we import createSlice from redux tookit
// then we call it, and it receives an object as an argument
// it needs a name, an initial state, and all the methods we want it to be
// behind the scene, createSlice creates a copy of the state and gives us that copied state to work with
// so even if we're mutating it with state.counter++, the original state is still immutable.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  increase(state, action) {
    state.counter += action.amount;
  },
  decrease(state, action) {
    state.counter += action.amount;
  },
  toggle(state) {
    state.visible = !state.visbile;
  },
});

// configureStore would create and configure the store for us, and it can help us manage multiple reducers easier
const store = configureStore({
  reducer: counterSlice.reducer,
  // reducer: {counter: counterSlice.reducer} // this is how we would do it if we have multiple reducers, it will combine every reducer into one big reducer
});

// const counterReducer = (state, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       visible: state.visible,
//     };
//   }

//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.amount,
//       visible: state.visible,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       visible: state.visible,
//     };
//   }

//   if (action.type === "DECREASE") {
//     return {
//       counter: state.counter - action.amount,
//       visible: state.visible,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return {
//       counter: state.counter,
//       visible: !state.visible,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer, initialState);

export default store;
