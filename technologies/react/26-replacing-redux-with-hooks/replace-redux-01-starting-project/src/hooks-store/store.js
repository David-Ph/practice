import { useState, useEffect } from "react";

let globalState = {}; // this is the variable that stores all global staste
let listeners = []; // this stores listeners function that we can call to update all components that are using the custom hook
let actions = {};

export const useStore = (shouldListen = true) => {
  // We use a global variable
  // the variable is created outside of the custom hook
  // if inside of the hook, the data will not be shared
  // it would be inclusive to each component
  // but if we it outside of the hook
  // every component that imports this file will get the same
  // shared data
  // we're only interesting in setState function so we will only take that
  const setState = useState(globalState)[1];

  // so this idea is like redux dispatch action
  const dispatch = (type, payload) => {
    // we receive action id / action type
    // then we look for the action function in the actions vaariable
    // that action function should return the new state
    // and then we update the global state
    const newState = actions[type](globalState, payload);
    globalState = { ...globalState, ...newState };

    // then we update every listener of the new state
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  // this will only run once when the component mounts
  useEffect(() => {
    // for every import/component that uses this custom hook
    // we will push a new setState function to listeners array
    // the listeners array will grow a lot over time
    if (shouldListen) {
      listeners.push(setState);
    }

    // remove the setState function from the listeners array
    // when the component unmounts
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState]);

  // then we return something from this custom hook
  return [globalState, dispatch];
};

// this is the init store function
// now we need some place to create products store
export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
