import { field } from "./Input.module.css";

const Input = ({
  inputType,
  inputPlaceholder,
  inputValue,
  inputName,
  inputOnChange,
}) => {
  return (
    <div>
      <input
        className={field}
        type={inputType}
        placeholder={inputPlaceholder}
        {...(inputName === "firstName" ? { autoFocus: true } : {})}
        value={inputValue}
        name={inputName}
        onChange={inputOnChange}
      />
    </div>
  );
};

export default Input;
