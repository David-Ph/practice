import useValidation from "../hooks/use-validation";

const BasicForm = (props) => {
  const {
    value: firstNameInput,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    resetInput: resetFirstNameInput,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: lastNameInput,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    resetInput: resetLastNameInput,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailHasError,
    resetInput: resetEmailInput,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useValidation((value) => value.includes("@"));

  let formIsValid = false;
  if (firstNameIsValid && emailIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const emailClass = !emailHasError ? "form-control" : "form-control invalid";
  const firstClass = !firstNameHasError
    ? "form-control"
    : "form-control invalid";
  const lastClass = !lastNameHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstClass}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameInput}
            type="text"
            id="name"
          />
          {firstNameHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={lastClass}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameInput}
            type="text"
            id="name"
          />
          {lastNameHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
          type="text"
          id="name"
        />
        {emailHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
