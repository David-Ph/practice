import { useState } from "react";

function SimpleInput(props) {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  // because this variable will be reevaluated whenver this component
  // is rerendered (when any of the state changes), we can make sure that
  // this variable will have the latest state snapshot
  const nameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  let formIsValid = false;

  if (nameIsValid) {
    formIsValid(true);
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // the reason why we're accessing event target value here and not
    // the enteredName state is, because the way react works, it schedules
    // the state changes, so when this code below executes, we may not have\
    // the latest state changes yet

    // if (event.target.value.trim() !== "") {
    //   setNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid) return;

    setEnteredName("");
    setNameIsTouched(false);
    // nameInputRef.current.value = "" => NOT IDEAL, DON'T TRY TO MANIPULATE THE DOM
  };

  const nameInputClases = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClases}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
