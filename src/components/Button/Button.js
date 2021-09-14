import { active, inactive } from "./Button.module.css";

const Button = ({ children, buttonOnClick, state }) => {
  return (
    <button
      className={state ? inactive : active}
      onClick={buttonOnClick}
      {...(state ? { disabled: true } : {})}
    >
      {children}
    </button>
  );
};

export default Button;
