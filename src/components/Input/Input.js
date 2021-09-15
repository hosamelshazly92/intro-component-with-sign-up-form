import {
  field,
  validate,
  pass,
  container,
  red,
  green,
} from "./Input.module.css";

const Input = ({
  inputType,
  inputPlaceholder,
  inputValue,
  inputName,
  inputOnChange,
  inputAlert,
  inputOnFocus,
  inputEmail,
}) => {
  return (
    <div>
      <input
        className={`${field} ${inputAlert ? red : {}} ${
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
        onFocus={inputOnFocus}
      />
      <div className={container}>
        {inputAlert && (
          <div className={validate}>
            <span>Can't leave empty inputs</span>
            <i className="fas fa-exclamation-circle"></i>
          </div>
        )}

        {inputName === "firstName" && inputValue.length !== 0 && (
          <div className={pass}>
            <span>Ok!</span>
            <i className="fas fa-check-circle"></i>
          </div>
        )}

        {inputName === "lastName" && inputValue.length !== 0 && (
          <div className={pass}>
            <span>Ok!</span>
            <i className="fas fa-check-circle"></i>
          </div>
        )}

        {inputName === "email" && inputEmail(inputValue) && (
          <div className={pass}>
            <span>Ok!</span>
            <i className="fas fa-check-circle"></i>
          </div>
        )}

        {inputName === "password" && inputValue.length > 3 && (
          <div className={pass}>
            <span>Ok!</span>
            <i className="fas fa-check-circle"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
