// import { connect } from 'react-redux'
import { createStore } from "redux";

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer, { counter: 0 });

export default store;
