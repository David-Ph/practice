// import { connect } from 'react-redux'
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

// configureStore would create and configure the store for us, and it can help us manage multiple reducers easier
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, // this is how we would do it if we have multiple reducers, it will combine every reducer into one big reducer
});

// this is how we can use the dispatcher
// behing the scenes, this will create an action object for us
// so we don't need to specifically create the action identifier
export default store;

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

// export default store;
