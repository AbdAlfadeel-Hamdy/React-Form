import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [inputNameIsTouched, setinputNameIsTouched] = useState(false);

  const [enterdedEmail, setEnteredEmail] = useState("");
  const [inputEmailIsTouched, setInputEmailIsTouched] = useState(false);

  const enterdNameIsValid = enteredName.trim() !== "";
  const enterdedEmailIsValid = enterdedEmail.trim().includes("@");

  const formIsValid = enterdNameIsValid && enterdedEmailIsValid;

  const inputNameChangeHandler = (e) => setEnteredName(e.target.value);
  const inputEmailChangeHandler = (e) => setEnteredEmail(e.target.value);

  const inputNameBlurHandler = () => setinputNameIsTouched(true);
  const inputEmailBlurHandler = () => setInputEmailIsTouched(true);

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setinputNameIsTouched(true);
    setInputEmailIsTouched(true);
    if (!enterdNameIsValid || !enterdedEmailIsValid) return;
    console.log(enteredName, enterdedEmail);
    setEnteredName("");
    setEnteredEmail("");
    setinputNameIsTouched(false);
    setInputEmailIsTouched(false);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div
        className={`form-control ${
          !enterdNameIsValid && inputNameIsTouched ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          onBlur={inputNameBlurHandler}
          value={enteredName}
        />
      </div>
      {!enterdNameIsValid && inputNameIsTouched && (
        <p className="error-text">Name must not be empty!</p>
      )}
      <div
        className={`form-control ${
          !enterdedEmailIsValid && inputEmailIsTouched ? "invalid" : ""
        }`}
      >
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
          value={enterdedEmail}
        />
      </div>
      {!enterdedEmailIsValid && inputEmailIsTouched && (
        <p className="error-text">Please Enter a valid email!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
