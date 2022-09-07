import { useState } from "react";
const useInput = (validateValue, errorMessage) => {
  const [enterdedValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const enterdedValueIsValid = validateValue(enterdedValue);
  const hasError = !enterdedValueIsValid && inputIsTouched;
  const inputValueChangeHandler = (e) => setEnteredValue(e.target.value);
  const inputBlurHandler = () => setInputIsTouched(true);
  const reset = () => {
    setEnteredValue("");
    setInputIsTouched(false);
  };
  return {
    enterdedValue,
    inputIsTouched,
    enterdedValueIsValid,
    hasError,
    errorMessage,
    inputValueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
