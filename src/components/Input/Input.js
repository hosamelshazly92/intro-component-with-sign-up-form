import { field, validate, red } from "./Input.module.css";
import { Fragment } from "react";

const Input = ({
  inputType,
  inputPlaceholder,
  inputValue,
  inputName,
  inputOnChange,
  inputAlert,
  inputOnFocus,
}) => {
  return (
    <div>
      <input
        className={`${field} ${inputAlert ? red : {}}`}
        type={inputType}
        placeholder={inputPlaceholder}
        {...(inputName === "firstName" ? { autoFocus: true } : {})}
        value={inputValue}
        name={inputName}
        onChange={inputOnChange}
        onFocus={inputOnFocus}
      />
      <div className={validate}>
        {inputAlert && (
          <Fragment>
            <span>Can't leave empty inputs</span>
            <i className="fas fa-exclamation-circle"></i>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Input;
