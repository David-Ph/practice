import { useState, useRef } from "react";

function SimpleInput(props) {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

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

  const nameInputClases = nameIsValid
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
          value={enteredName}
          ref={nameInputRef}
        />
      </div>
      {!nameIsValid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
