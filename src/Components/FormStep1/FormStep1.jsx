import "./FormStep1.scss";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import bigImg from "../../Assets/Images/Frame 37.png";
export default function StartForm(props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [checkPasswordInput, setCheckPasswordInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordClass, setPasswordClass] = useState("sign-up__input-box");

  //HANDLE FUNCTIONS
  function handleEmailChange(e) {
    setEmailInput(e.target.value);
  }

  function handlePasswordChange(e) {
    setPasswordInput(e.target.value);
  }

  function handleCheckPassword(e) {
    setCheckPasswordInput(e.target.value);
  }

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  //FUNCTION TO VALIDATE INPUT DATA
  function isPasswordValid() {
    if (passwordInput && passwordInput.split("").length > 7) {
      return true;
    }
    return false;
  }

  function isCheckPasswordValid() {
    if (
      passwordInput &&
      checkPasswordInput &&
      passwordInput === checkPasswordInput
    ) {
      setPasswordClass("sign-up__input-box");
    }
    setPasswordClass("sign-up__input-box sign-up__input-box--error");
  }

  function isValidEmail() {
    if (emailInput && /\S+@\S+\.\S+/.test(emailInput)) {
      return true;
    }
    return false;
  }

  function isPasswordMatch() {
    if (passwordInput !== checkPasswordInput) {
      return false;
    }
    return true;
  }

  function isFormValid() {
    if (!isValidEmail()) {
      return false;
    }
    if (!isPasswordValid()) {
      return false;
    }

    if (!isCheckPasswordValid()) {
      return false;
    }
    if (!isPasswordMatch()) {
      return false;
    }
    return true;
  }

  //FUNCTION USED TO SUBMIT
  function handleSubmit(e) {
    e.preventDefault();

    props.goToStep2();
  }
  return (
    <div className="sign-up">
      <div className="sign-up__big-flex">
        <div className="sign-up__big-wrapper">
          <Logo logoClassName="logo--sign-up" />

          <h2 className="sign-up__heading">
            Start a 30 day free trial for Monthly Bookkeeping
          </h2>
          <div className="sign-up__text-wrapper">
            <p>No credit card required</p>
            <p>Another highlight</p>
          </div>
          <form className="sign-up__form" onSubmit={handleSubmit}>
            <div className="sign-up__two-boxes-wrapper">
              <input
                className="sign-up__input-box"
                type="text"
                placeholder="First Name"
                onChange={handleFirstName}
              />
              <input
                className="sign-up__input-box"
                type="text"
                placeholder="Last Name"
                onChange={handleLastName}
              />
            </div>
            <input
              className="sign-up__input-box"
              type="text"
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              className={passwordClass}
            />
            <input
              className="sign-up__input-box"
              type="password"
              placeholder="Confirm Password"
              onChange={handleCheckPassword}
            />
            <button className="sign-up__button">Start a Free Trial</button>
          </form>
        </div>
        <img src={bigImg} alt="big-image" className="sign-up__big-image" />
      </div>
    </div>
  );
}
