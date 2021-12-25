// 1. import redux
const redux = require("redux");

// 3. create reducer fn
// receives two arguments, first is the previous state, second is the dispached action
// which is basically the data that we receive from the trigger/dispatcher
// and it has to return the new state
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

// 2. create redux store
// accepts arguments, first arguments is the reducerFn
// second argument is the default value
const store = redux.createStore(counterReducer, { counter: 0 });

// 4. create the component that subscribes
const counterSubscriber = () => {
  // get the latest state
  const latestState = store.getState();
  console.log(latestState);
};

// 5. Subscribe it to the store
store.subscribe(counterSubscriber);

// 6. Dispatch/trigger an action
store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "DECREMENT",
});
