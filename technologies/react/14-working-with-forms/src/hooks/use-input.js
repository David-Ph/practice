import { useState } from "react";

function useInput(validationFn) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationFn(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setIsTouched(false);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    resetInput,
    valueChangeHandler,
    valueInputBlurHandler,
  };
}

export default useInput;
