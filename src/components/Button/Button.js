import { container } from "./Button.module.css";

const Button = ({ children, buttonOnClick }) => {
  return (
    <button className={container} onClick={buttonOnClick}>
      {children}
    </button>
  );
};

export default Button;
