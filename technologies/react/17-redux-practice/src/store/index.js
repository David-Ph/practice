// import { connect } from 'react-redux'
import { createStore } from "redux";

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      visible: state.visible,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.increase,
      visible: state.visible,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      visible: state.visible,
    };
  }

  if (action.type === "DECREASE") {
    return {
      counter: state.counter - action.decrease,
      visible: state.visible,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      visible: !state.visible,
    };
  }

  return state;
};
const initialState = { counter: 0, visible: true };
const store = createStore(counterReducer, initialState);

export default store;
