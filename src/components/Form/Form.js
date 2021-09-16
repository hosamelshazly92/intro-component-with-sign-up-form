import { container, text, higlight, note } from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState, Fragment } from "react";
import Modal from "../Modal/Modal";

const Form = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // const [alert, setAlert] = useState({
  //   firstNameAlert: false,
  //   lastNameAlert: false,
  //   emailAlert: false,
  //   passwordAlert: false,
  // });

  const [disable, setDisable] = useState(false);

  const [popup, setPopup] = useState(false);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (evt) => {
    setValue({
      firstName:
        evt.target.name === "firstName" ? evt.target.value : value.firstName,
      lastName:
        evt.target.name === "lastName" ? evt.target.value : value.lastName,
      email: evt.target.name === "email" ? evt.target.value : value.email,
      password:
        evt.target.name === "password" ? evt.target.value : value.password,
    });

    if (
      value.firstName.length !== 0 &&
      value.lastName.length !== 0 &&
      validateEmail(value.email) &&
      value.password.length > 2
    ) {
      // setAlert({
      //   firstNameAlert:
      //     value.firstName === "" ? !alert.firstNameAlert : alert.firstNameAlert,
      //   lastNameAlert:
      //     value.lastName === "" ? !alert.lastNameAlert : alert.lastNameAlert,
      //   emailAlert: value.email === "" ? !alert.emailAlert : alert.emailAlert,
      //   passwordAlert:
      //     value.password === "" ? !alert.passwordAlert : alert.passwordAlert,
      // });
      setDisable(false);
    } else {
      setDisable(true);
    }

    // setAlert({
    //   firstNameAlert:
    //     evt.target.name === "firstName" ? false : alert.firstNameAlert,
    //   lastNameAlert:
    //     evt.target.name === "lastName" ? false : alert.lastNameAlert,
    //   emailAlert: evt.target.name === "email" ? false : alert.emailAlert,
    //   passwordAlert:
    //     evt.target.name === "password" ? false : alert.passwordAlert,
    // });
  };

  // console.log("password => " + value.password.length, value.password > 3);
  // console.log("disabled => " + disable);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (
      value.firstName === "" ||
      value.lastName === "" ||
      value.email === "" ||
      value.password === ""
    ) {
      // setAlert({
      //   firstNameAlert:
      //     value.firstName === "" ? !alert.firstNameAlert : alert.firstNameAlert,
      //   lastNameAlert:
      //     value.lastName === "" ? !alert.lastNameAlert : alert.lastNameAlert,
      //   emailAlert: value.email === "" ? !alert.emailAlert : alert.emailAlert,
      //   passwordAlert:
      //     value.password === "" ? !alert.passwordAlert : alert.passwordAlert,
      // });

      setDisable(true);

      return;
    }

    setPopup(true);
  };

  // const handleFocus = (evt) => {
  //   setAlert({
  //     firstNameAlert:
  //       evt.target.name === "firstName" ? false : alert.firstNameAlert,
  //     lastNameAlert:
  //       evt.target.name === "lastName" ? false : alert.lastNameAlert,
  //     emailAlert: evt.target.name === "email" ? false : alert.emailAlert,
  //     passwordAlert:
  //       evt.target.name === "password" ? false : alert.passwordAlert,
  //   });
  // };

  const inputs = [
    {
      type: "text",
      placeholder: "First Name",
      value: value.firstName,
      name: "firstName",
      // alert: alert.firstNameAlert,
    },
    {
      type: "text",
      placeholder: "Last Name",
      value: value.lastName,
      name: "lastName",
      // alert: alert.lastNameAlert,
    },
    {
      type: "email",
      placeholder: "Email Address",
      value: value.email,
      name: "email",
      // alert: alert.emailAlert,
    },
    {
      type: "password",
      placeholder: "Password",
      value: value.password,
      name: "password",
      // alert: alert.passwordAlert,
    },
  ];

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className={container}>
        {inputs.map((elm) => {
          return (
            <Input
              key={elm.name}
              inputType={elm.type}
              inputPlaceholder={elm.placeholder}
              inputValue={elm.value}
              inputName={elm.name}
              inputOnChange={handleChange}
              // inputAlert={elm.alert}
              // inputOnFocus={handleFocus}
              inputEmail={validateEmail}
            />
          );
        })}

        <Button state={disable} buttonOnClick={handleSubmit}>
          Claim Your Free Trial
        </Button>

        <div className={note}>
          <p className={text}>
            By clicking the button, you are agreeing to our{" "}
          </p>
          <span className={higlight}>Terms and Services</span>
        </div>
      </form>

      {popup && (
        <Modal
          modalOnClick={setPopup}
          modalValue={value}
          modalSetValue={setValue}
        />
      )}
    </Fragment>
  );
};

export default Form;
