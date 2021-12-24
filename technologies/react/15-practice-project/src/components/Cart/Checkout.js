import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameInput = nameInputRef.current.value;
    const streetInput = streetInputRef.current.value;
    const postalInput = postalInputRef.current.value;
    const cityInput = cityInputRef.current.value;

    const nameIsValid = isNotEmpty(nameInput);
    const streetIsValid = isNotEmpty(streetInput);
    const cityIsValid = isNotEmpty(cityInput);
    const postalIsValid = isFiveChar(postalInput);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postal: postalIsValid,
    });

    // if any is invalid, return
    if (!nameIsValid || !streetIsValid || !cityIsValid || !postalIsValid) {
      return;
    }

    props.onConfirm({
      name: nameInput,
      street: streetInput,
      city: cityInput,
      postal: postalInput,
    });
  };

  const nameClasses = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    formValidity.street ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    formValidity.city ? "" : classes.invalid
  }`;
  const postalClasses = `${classes.control} ${
    formValidity.postal ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formValidity.name && <p>Please enter correct name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formValidity.street && <p>Please enter correct street</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!formValidity.postal && <p>Please enter correct postal</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formValidity.city && <p>Please enter correct city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
