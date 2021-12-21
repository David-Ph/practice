import { useState, useRef, useEffect } from "react";

function SimpleInput(props) {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  useEffect(() => {
    if (nameIsValid) {
      console.log("Name is valid!");
    }
  }, [nameIsValid]);

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true);

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    // basic validation, check if enteredname is empty
    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }

    // console.log(enteredName);
    // console.log(nameInputRef.current.value);
    setNameIsValid(true);
    setEnteredName("");
    // nameInputRef.current.value = "" => NOT IDEAL, DON'T TRY TO MANIPULATE THE DOM
  };

  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

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
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          ref={nameInputRef}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
