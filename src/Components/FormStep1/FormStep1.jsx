import "./FormStep1.scss";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bigImg from "../../Assets/Images/Frame 37.png";
export default function StartForm(props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [checkPasswordInput, setCheckPasswordInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorCheckPassword, setErrorCheckPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

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
  function isFirstNameValid() {
    if (firstName && [...firstName].length > 7) {
      return true;
    }
    return false;
  }

  function isLastNameValid() {
    if (lastName && [...lastName].length > 7) {
      return true;
    }
    return false;
  }

  function isPasswordValid() {
    if (passwordInput) {
      return true;
    }
    return false;
  }

  function isCheckPasswordValid() {
    if (
      isPasswordValid() &&
      checkPasswordInput &&
      passwordInput === checkPasswordInput
    ) {
      return true;
    }
    return false;
  }

  function isEmailValid() {
    if (emailInput && /\S+@\S+\.\S+/.test(emailInput)) {
      return true;
    }
    return false;
  }

  //FUNCTION TO SET PASSWORD STRENGTH
  const passwordStrengthFunc = () => {
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!regularExpression.test(passwordInput) && passwordInput.length < 7) {
      setPasswordStrength("weak");
    } else if (
      !regularExpression.test(passwordInput) &&
      passwordInput.length > 7
    ) {
      setPasswordStrength("medium");
    } else if (
      regularExpression.test(passwordInput) &&
      passwordInput.length > 7
    ) {
      setPasswordStrength("strong");
    }
  };

  //USE USEEFFECT
  useEffect(() => {
    passwordStrengthFunc();
  }, [passwordInput]);

  useEffect(() => {
    if (isFirstNameValid()) {
      setErrorFirstName("");
    }
  }, [firstName]);

  useEffect(() => {
    if (isLastNameValid()) {
      setErrorLastName("");
    }
  }, [lastName]);

  useEffect(() => {
    if (isEmailValid()) {
      setErrorEmail("");
    }
  }, [emailInput]);

  useEffect(() => {
    if (isPasswordValid()) {
      setErrorPassword("");
    }
  }, [passwordInput]);

  useEffect(() => {
    if (isCheckPasswordValid()) {
      setErrorCheckPassword("");
    }
  }, [checkPasswordInput]);
  //FUNCTION USED TO SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    if (!isFirstNameValid()) {
      setErrorFirstName("sign-up__input-box--error");
    } else {
      setErrorFirstName("");
    }
    if (!isLastNameValid()) {
      setErrorLastName("sign-up__input-box--error");
    } else {
      setErrorLastName("");
    }
    if (!isEmailValid()) {
      setErrorEmail("sign-up__input-box--error");
    } else {
      setErrorEmail("");
    }
    if (!isPasswordValid()) {
      setErrorPassword("sign-up__input-box--error");
    } else {
      setErrorPassword("");
    }
    if (!isCheckPasswordValid()) {
      setErrorCheckPassword("sign-up__input-box--error");
    } else {
      setErrorCheckPassword("");
    }

    // props.goToStep2();
  }
  return (
    <div className="sign-up">
      <div className="sign-up__big-flex">
        <div className="sign-up__big-wrapper">
          <Logo logoClassName="logo--sign-up" />

          <h2 className="sign-up__heading">
            Start a 30 day free trial for Monthly Bookkeeping.
          </h2>
          <div className="sign-up__text-wrapper">
            <p>No credit card required</p>
            <p>Another highlight</p>
          </div>
          <form className="sign-up__form" onSubmit={handleSubmit}>
            <div className="sign-up__two-boxes-wrapper">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstName}
                className={`sign-up__input-box ${errorFirstName}`}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastName}
                className={`sign-up__input-box ${errorLastName}`}
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              value={emailInput}
              onChange={handleEmailChange}
              className={`sign-up__input-box ${errorEmail}`}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={passwordInput}
              className={`sign-up__input-box ${errorPassword} ${
                passwordStrength && `sign-up__input-box--${passwordStrength}`
              }`}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handleCheckPassword}
              value={checkPasswordInput}
              className={`sign-up__input-box ${errorCheckPassword}`}
            />
            <button type="submit" className="sign-up__button">
              Start a Free Trial
            </button>
          </form>
        </div>
        <img src={bigImg} alt="big-image" className="sign-up__big-image" />
      </div>
    </div>
  );
}
