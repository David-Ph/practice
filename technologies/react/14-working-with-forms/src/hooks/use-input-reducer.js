import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }

  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "RESET") {
    return initialInputState;
  }

  return initialInputState;
};

function useInput(validationFn) {
  const [inputState, inputDispatcher] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validationFn(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    inputDispatcher({
      type: "CHANGE",
      value: event.target.value,
    });
  };

  const valueInputBlurHandler = (event) => {
    inputDispatcher({ type: "BLUR" });
  };

  const resetInput = () => {
    inputDispatcher({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    resetInput,
    valueChangeHandler,
    valueInputBlurHandler,
  };
}

export default useInput;
