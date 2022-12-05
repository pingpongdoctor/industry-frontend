import "./SignUp.scss";
import { useState } from "react";
import FormStep1 from "../components/FormStep1/FormStep1";
// import FormStep2 from "../components/FormStep2/FormStep2";
// import FormStep3 from "../components/FormStep3/FormStep3";
export default function SignUp() {
  function goToStep3() {
    return "hello";
    // setStep(<FormStep3 />);
  }
  function goToStep2() {
    return "hello";
    // setStep(<FormStep2 goToStep3={goToStep3} />);
  }
  const [step, setStep] = useState(
    <FormStep1 goToStep2={goToStep2} test="works" />
  );
  return (
    <div className="container">
      <div className="left">
        <div className="form-container">{step}</div>
      </div>
      <div className="right"></div>
    </div>
  );
}
