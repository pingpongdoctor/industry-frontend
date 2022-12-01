import { useDebugValue, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [checkPasswordInput, setCheckPasswordInput] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("weak");
  const [passwordField, setPasswordField] = useState("white");

  function handleEmailChange(e) {
    setEmailInput(e.target.value);
    if (!isValidEmail(e.target.value)) {
      console.log("Email is invalid");
    } else {
      console.log("email is good");
    }
  }

  function passwordsMatch(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
  useEffect(() => {
    if (passwordInput.split("").length < 7) {
      setPasswordField("red");
    } else if (
      passwordInput.split("").length > 7 &&
      passwordInput.split("").length < 10
    ) {
      setPasswordField("yellow");
    } else {
      setPasswordField("green");
    }
  }, [passwordInput]);

  function handlePasswordChange(e) {
    setPasswordInput(e.target.value);

    if (e.target.value.split().length > 10) {
      setPasswordStrength("strong");
    }
    if (e.target.value.split().length > 7) {
      setPasswordStrength("average");
    }
  }

  function handleCheckPassword(e) {
    setCheckPasswordInput(e.target.value);
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidEmail(emailInput)) {
      console.log("please enter a valid email address");
      return;
    }
    if (!passwordInput) {
      console.log("You must enter a password");
      return;
    }

    if (!passwordsMatch(passwordInput, checkPasswordInput)) {
      console.log("Passwords don't match");
      return;
    }

    if (isValidEmail && passwordsMatch) {
      console.log("good");
      // useNavigate()
    }
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={emailInput}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={passwordInput}
          onChange={handlePasswordChange}
          className={passwordField}
        />
      </div>
      <label htmlFor="check-password">Re-enter Password</label>
      <input
        type="password"
        name="check-password"
        id="check-password"
        value={checkPasswordInput}
        onChange={handleCheckPassword}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form2;
