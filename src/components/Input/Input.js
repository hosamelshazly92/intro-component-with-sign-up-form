import { field } from "./Input.module.css";

const Input = ({
  inputType,
  inputPlaceholder,
  inputValue,
  inputName,
  inputOnChange,
}) => {
  return inputPlaceholder === "First Name" ? (
    <div>
      <input
        className={field}
        type={inputType}
        placeholder={inputPlaceholder}
        autoFocus
        value={inputValue}
        name={inputName}
        onChange={inputOnChange}
      />
    </div>
  ) : (
    <div>
      <input
        className={field}
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        name={inputName}
        onChange={inputOnChange}
      />
    </div>
  );
};

export default Input;
