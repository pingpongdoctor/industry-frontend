import "./SignUp.scss";
import Logo from "../components/Logo/Logo";
import { useState } from "react";
import ProgressIndicator from "../components/ProgressIndicator/ProgressIndicator";
export default function StartForm() {
  //USESTATES FOR INPUT BOXES
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <ProgressIndicator indicatorClassName={"indicator indicator--sign-up"} />
      <Logo logoClassName="logo--sign-up" />
      <form className="sign-up__form">
        <h2 className="sign-up__heading">
          Get started witsh America's largest bookkeeping service
        </h2>
        <p className="sign-up__text">
          A Bench financial expert will give you a call and ask a few questions
          to ensure that Bench is the best fit for your business.
        </p>
        <div className="sign-up__wrapper">
          <input
            className="sign-up__input-box"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="sign-up__input-box"
            type="text"
            placeholder="Email"
          />
          <input
            className="sign-up__input-box"
            type="text"
            placeholder="Password"
          />
          <input
            className="sign-up__input-box"
            type="text"
            placeholder="Confirm Password"
          />
        </div>
        <button className="sign-up__button">Start a Free Trial</button>
      </form>
    </div>
  );
}
