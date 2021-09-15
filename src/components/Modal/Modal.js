import ReactDOM from "react-dom";
import {
  container,
  popup,
  close,
  values,
  row,
  left,
  right,
} from "./Modal.module.css";

const Message = ({ messageOnClick, messageValue, messageSetValue }) => {
  const handleClick = () => {
    messageOnClick(false);

    messageSetValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const { firstName, lastName, email, password } = messageValue;

  return (
    <div className={container}>
      <div className={popup}>
        <i id={close} className="fas fa-times" onClick={handleClick}></i>
        <div className={row}>
          <div className={left}>
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Email:</p>
            <p>Password:</p>
          </div>
          <div className={right}>
            <p className={values}>{firstName}</p>
            <p className={values}>{lastName}</p>
            <p className={values}>{email}</p>
            <p className={values}>{`****${password[password.length - 1]}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ modalOnClick, modalValue, modalSetValue }) => {
  return ReactDOM.createPortal(
    <Message
      messageOnClick={modalOnClick}
      messageValue={modalValue}
      messageSetValue={modalSetValue}
    />,
    document.getElementById("modal")
  );
};

export default Modal;
