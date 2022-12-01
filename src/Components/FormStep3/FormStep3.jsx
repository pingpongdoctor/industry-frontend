import "./FormStep3.scss";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import bigImg from "../../Assets/Images/Frame 37.png";
export default function StartForm() {
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
      return true;
      setPasswordClass("sign-up__input-box");
    }
    return false;
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

  //FUNCTION USED TO SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    isCheckPasswordValid();
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
      <div className="sign-up__big-flex">
        <div className="sign-up__big-wrapper">
          <Logo logoClassName="logo--sign-up" />

          <h2 className="sign-up__heading">How can we contact you?</h2>
          <p>
            Before we can get your free month of bookkeeping started, we’ll need
            a few more details. Let us know the best phone number to reach you,
            and we’ll get in touch ASAP to get started.
          </p>
          <form className="sign-up__form" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handlePasswordChange}
              className={passwordClass}
            />
            <input
              className="sign-up__input-box"
              type="text"
              onChange={handleCheckPassword}
            />
            <div className="sign-up__two-boxes-wrapper">
              <label htmlFor="country">Country</label>
              <select name="country" id="country">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <label htmlFor="time">Time Zone</label>
              <select name="time" id="time">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <button className="sign-up__button">Start a Free Trial</button>
          </form>
        </div>
        <img src={bigImg} alt="big-image" className="sign-up__big-image" />
      </div>
    </div>
  );
}
