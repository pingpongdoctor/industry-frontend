import { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [formType, setFormType] = useState("persona1");

  return (
    <form className="form">
      <div className="form__div">
        <div className="form__radios">
          <label htmlFor="persona1">Persona 1</label>
          <input
            type="radio"
            name="personaType"
            value="persona1"
            checked={formType === "persona1"}
            id="persona1"
            onChange={(e) => {
              setFormType(e.target.value);
            }}
          />
          <label htmlFor="persona2">Persona 2</label>
          <input
            type="radio"
            name="personaType"
            value="persona2"
            checked={formType === "persona2"}
            id="persona2"
            onChange={(e) => {
              setFormType(e.target.value);
            }}
          />

          <label htmlFor="persona3">Persona 3</label>
          <input
            type="radio"
            name="personaType"
            value="persona3"
            checked={formType === "persona3"}
            id="persona3"
            onChange={(e) => {
              setFormType(e.target.value);
            }}
          />
        </div>

        <div
          className={
            formType === "persona1"
              ? "form__persona1-div"
              : "form__persona1-div--hidden"
          }
        >
          <p>This text shows for Persona 1</p>
          <input type="text" placeholder="This is one input field" />
        </div>

        <div
          className={
            formType === "persona2"
              ? "form__persona2-div"
              : "form__persona2-div--hidden"
          }
        >
          <p>This text shows for Persona 2</p>
          <input type="text" placeholder="This is another input field" />
        </div>

        <div
          className={
            formType === "persona3"
              ? "form__persona3-div"
              : "form__persona3-div--hidden"
          }
        >
          <p>This text shows for Persona 3</p>
          <input type="text" placeholder="And this is another input field" />
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
