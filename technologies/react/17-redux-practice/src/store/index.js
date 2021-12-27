// import { connect } from 'react-redux'
// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const authInitialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state, payload) {
      if (
        payload.payload.email.includes("@") &&
        payload.payload.password.length >= 5
      ) {
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// configureStore would create and configure the store for us, and it can help us manage multiple reducers easier
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, // this is how we would do it if we have multiple reducers, it will combine every reducer into one big reducer
});

// this is how we can use the dispatcher
// behing the scenes, this will create an action object for us
// so we don't need to specifically create the action identifier
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
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
