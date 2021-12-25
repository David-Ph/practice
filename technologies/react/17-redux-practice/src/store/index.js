// import { connect } from 'react-redux'
import { createStore } from "redux";

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.increase,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "DECREASE") {
    return {
      counter: state.counter - action.decrease,
    };
  }

  return state;
};

const store = createStore(counterReducer, { counter: 0 });

export default store;
