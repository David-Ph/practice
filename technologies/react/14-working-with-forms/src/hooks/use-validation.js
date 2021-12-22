import { useState } from "react";

const useValidation = (validationFn) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validationFn(value);
  const hasError = !isValid && isTouched;

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = (event) => {
    setIsTouched(true);
  };

  const resetInput = (event) => {
    setIsTouched(false);
    setValue(false);
  };

  return {
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    resetInput,
  };
};

export default useValidation;
