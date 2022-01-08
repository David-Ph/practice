import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    console.log(authCtx.token);
    event.preventDefault();

    const newPassword = passwordInputRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false,
        }),
      }
    ).then((res) => {
      console.log(res);
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={passwordInputRef}
          minLength="7"
          type="password"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
