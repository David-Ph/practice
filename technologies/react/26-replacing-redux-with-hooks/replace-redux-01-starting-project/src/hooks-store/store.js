import { useState, useEffect } from "react";

let globalState = {}; // this is the variable that stores all global staste
let listeners = []; // this stores listeners function that we can call to update all components that are using the custom hook
let actions = {};

const useStore = () => {
  // We use a global variable
  // the variable is created outside of the custom hook
  // if inside of the hook, the data will not be shared
  // it would be inclusive to each component
  // but if we it outside of the hook
  // every component that imports this file will get the same
  // shared data
  // we're only interesting in setState function so we will only take that
  const setState = useState(globalState)[1];

  // this will only run once when the component mounts
  useEffect(() => {
    // for every import/component that uses this custom hook
    // we will push a new setState function to listeners array
    // the listeners array will grow a lot over time
    listeners.push(setState);

    // remove the setState function from the listeners array
    // when the component unmounts
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);
};
