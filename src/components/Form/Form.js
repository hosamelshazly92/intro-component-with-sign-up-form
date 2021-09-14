import { container, text, higlight, note } from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (
      value.firstName === "" ||
      value.lastName === "" ||
      value.email === "" ||
      value.password === ""
    ) {
      return alert("Can't leave empty inputs");
    }

    setValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    alert(`
            First Name: "${value.firstName}"
            Last Name: "${value.lastName}"
            Email: "${value.email}"
            Password: "***${value.password[value.password.length - 1]}"
            `);
  };

  const inputs = [
    {
      type: "text",
      placeholder: "First Name",
      value: value.firstName,
      name: "firstName",
    },
    {
      type: "text",
      placeholder: "Last Name",
      value: value.lastName,
      name: "lastName",
    },
    {
      type: "email",
      placeholder: "Email Address",
      value: value.email,
      name: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      value: value.password,
      name: "password",
    },
  ];

  return (
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
          />
        );
      })}

      <Button buttonOnClick={handleSubmit}>Claim Your Free Trial</Button>

      <div className={note}>
        <p className={text}>By clicking the button, you are agreeing to our </p>
        <span className={higlight}>Terms and Services</span>
      </div>
    </form>
  );
};

export default Form;
