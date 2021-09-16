import {
  field,
  validate,
  note,
  container,
  red,
  green,
  exclamation,
  check,
  valid,
  userFeedback,
} from "./Input.module.css";
import { useState } from "react";

const Input = ({
  inputType,
  inputPlaceholder,
  inputValue,
  inputName,
  inputOnChange,
  inputEmail,
}) => {
  const [feedback, setFeedback] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleFocus = () => {
    setFeedback(true);
    setAlert(false);
  };

  const handleBlur = () => {
    setFeedback(false);
    setAlert(true);
  };

  return (
    <div>
      <input
        className={`${field} ${alert ? red : {}} ${
          inputName === "firstName" && inputValue.length !== 0 ? green : {}
        } ${inputName === "lastName" && inputValue.length !== 0 ? green : {}} ${
          inputName === "email" && inputEmail(inputValue) ? green : {}
        } ${inputName === "password" && inputValue.length > 3 ? green : {}}`}
        type={inputType}
        placeholder={inputPlaceholder}
        {...(inputName === "firstName" ? { autoFocus: true } : {})}
        value={inputValue}
        name={inputName}
        onChange={inputOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {/* empty input */}
      <div className={container}>
        {alert && (
          <div className={validate}>
            <span>Can't leave empty inputs</span>
            <i id={exclamation} className="fas fa-exclamation-circle"></i>
          </div>
        )}

        {/* user feedback */}
        {feedback && inputName === "firstName" && inputValue.length === 0 && (
          <div className={`${note} ${userFeedback}`}>
            <span>Enter your first name</span>
          </div>
        )}

        {feedback && inputName === "lastName" && inputValue.length === 0 && (
          <div className={`${note} ${userFeedback}`}>
            <span>Enter your last name</span>
          </div>
        )}

        {feedback && inputName === "email" && !inputEmail(inputValue) && (
          <div className={`${note} ${userFeedback}`}>
            <span>example@mail.com</span>
          </div>
        )}

        {feedback && inputName === "password" && inputValue.length <= 3 && (
          <div className={`${note} ${userFeedback}`}>
            <span>Password must contain at least 4 characters</span>
          </div>
        )}

        {/* valid input */}

        {inputName === "firstName" && inputValue.length !== 0 && (
          <div className={`${note} ${valid}`}>
            <span>Ok!</span>
            <i id={check} className="fas fa-check-circle"></i>
          </div>
        )}

        {inputName === "lastName" && inputValue.length !== 0 && (
          <div className={`${note} ${valid}`}>
            <span>Ok!</span>
            <i id={check} className="fas fa-check-circle"></i>
          </div>
        )}

        {inputName === "email" && inputEmail(inputValue) && (
          <div className={`${note} ${valid}`}>
            <span>Ok!</span>
            <i id={check} className="fas fa-check-circle"></i>
          </div>
        )}

        {inputName === "password" && inputValue.length > 3 && (
          <div className={`${note} ${valid}`}>
            <span>Ok!</span>
            <i id={check} className="fas fa-check-circle"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
