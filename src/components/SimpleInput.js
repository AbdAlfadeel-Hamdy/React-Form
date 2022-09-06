import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [inputNameIsTouched, setinputNameIsTouched] = useState(false);
  const enterdNameIsValid = enteredName.trim() !== "";
  const inputNameChangeHandler = (e) => setEnteredName(e.target.value);
  const inputNameBluronBlurHandler = () => setinputNameIsTouched(true);
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setinputNameIsTouched(true);
    if (!enterdNameIsValid) return;
    console.log(enteredName);
    setEnteredName("");
    setinputNameIsTouched(false);
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
          onBlur={inputNameBluronBlurHandler}
          value={enteredName}
        />
      </div>
      {!enterdNameIsValid && inputNameIsTouched && (
        <p className="error-text">Name must not be empty!</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
