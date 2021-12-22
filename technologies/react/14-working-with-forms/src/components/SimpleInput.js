import useInput from "../hooks/use-input";

function SimpleInput(props) {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    resetInput: resetNameInput,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    resetInput: resetEmailInput,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) return;

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClases = !nameInputHasError
    ? "form-control"
    : "form-control invalid";
  console.log(nameInputHasError);

  const emailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClases}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputHasError && <p className="error-text">Invalid Email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
