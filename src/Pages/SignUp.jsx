import "./SignUp.scss";
import Logo from "../components/Logo/Logo";
import { useState } from "react";
import ProgressIndicator from "../components/ProgressIndicator/ProgressIndicator";
export default function StartForm() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [checkPasswordInput, setCheckPasswordInput] = useState("");
  // const [passwordStrength, setPasswordStrength] = useState("weak");

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
      return true;
    }
    return false;
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

  //FUNCTION USED TO SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
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
  return (
    <div className="sign-up">
      <Logo logoClassName="logo--sign-up" />
      <ProgressIndicator indicatorClassName={"indicator indicator--sign-up"} />
      <form className="sign-up__form">
        <h2 className="sign-up__heading">
          Get started witsh America's largest bookkeeping service
        </h2>
        <p className="sign-up__text">
          A Bench financial expert will give you a call and ask a few questions
          to ensure that Bench is the best fit for your business.
        </p>
        <div className="sign-up__wrapper">
          <div className="sign-up__two-boxes-wrapper">
            <input
              className="sign-up__input-box"
              type="text"
              placeholder="First Name"
            />
            <input
              className="sign-up__input-box"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="sign-up__input-box"
            type="text"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <input
            className="sign-up__input-box"
            type="text"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <input
            className="sign-up__input-box"
            type="text"
            placeholder="Confirm Password"
            onChange={handleCheckPassword}
          />
        </div>
        <button className="sign-up__button">Start a Free Trial</button>
      </form>
    </div>
  );
}
