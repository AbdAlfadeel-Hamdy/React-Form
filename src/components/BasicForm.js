import useInput from "../hooks/use-input";
const BasicForm = () => {
  const {
    enterdedValue: enterdedNameValue,
    enterdedValueIsValid: enterdedNameIsValid,
    hasError: nameHasError,
    errorMessage: nameErrorMessage,
    inputValueChangeHandler: inputNameChangeHandler,
    inputBlurHandler: inputNameBlurHandler,
    reset: nameReset,
  } = useInput((val) => val.trim() !== "", "First Name must not be empty!");
  const {
    enterdedValue: enteredLastNameValue,
    enterdedValueIsValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    errorMessage: lastNameErrorMessage,
    inputValueChangeHandler: inputLastNameChangeHandler,
    inputBlurHandler: inputLastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((val) => val.trim() !== "", "Last name must not be empty!");
  const {
    enterdedValue: enteredEmailValue,
    enterdedValueIsValid: enteredEmailIsValid,
    hasError: emailHasError,
    errorMessage: emailErrorMessage,
    inputValueChangeHandler: inputEmailChangeHandler,
    inputBlurHandler: inputEmailBlurHandler,
    reset: emailReset,
  } = useInput(
    (val) => val.trim().includes("@"),
    "Please enter a vaild email!"
  );

  const formIsValid =
    enterdedNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    console.log(enterdedNameValue, enteredLastNameValue, enteredEmailValue);
    nameReset();
    lastNameReset();
    emailReset();
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={`form-control ${nameHasError ? "invalid" : ""}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enterdedNameValue}
            onChange={inputNameChangeHandler}
            onBlur={inputNameBlurHandler}
          />
          {nameHasError && <p className="error-text">{nameErrorMessage}</p>}
        </div>
        <div className={`form-control ${lastNameHasError ? "invalid" : ""}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastNameValue}
            onChange={inputLastNameChangeHandler}
            onBlur={inputLastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">{lastNameErrorMessage}</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailHasError ? "invalid" : ""}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmailValue}
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
        />
        {emailHasError && <p className="error-text">{emailErrorMessage}</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
