import useInput from "../hooks/use-input";
const SimpleInput = () => {
  const {
    enterdedValue: enteredName,
    inputIsTouched: inputNameIsTouched,
    enterdedValueIsValid: enterdNameIsValid,
    inputValueChangeHandler: inputNameChangeHandler,
    inputBlurHandler: inputNameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    enterdedValue: enterdedEmail,
    inputIsTouched: inputEmailIsTouched,
    enterdedValueIsValid: enterdedEmailIsValid,
    inputValueChangeHandler: inputEmailChangeHandler,
    inputBlurHandler: inputEmailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim().includes("@"));

  const formIsValid = enterdNameIsValid && enterdedEmailIsValid;

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!enterdNameIsValid || !enterdedEmailIsValid) return;
    console.log(enteredName, enterdedEmail);
    nameReset();
    emailReset();
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
