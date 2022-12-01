import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";

import "./FormStep2.scss";
import design from "../../Assets/Images/frame-33.png";

import Logo from "../Logo/Logo";

export default function FormStep2(props) {
  function handleSubmit() {
    props.goToStep3();
  }
  return (
    <div className="sign-up-biz">
      <div className="form">
        <form>
          <Logo logoClassName="logo--form" />
          <h1>Tell us about your business</h1>
          <p className="form__para--text">
            We'd like to learn more about your business so that we can provide
            you with the best experience possible
          </p>
          <div className="form__option">
            <p className="form__para">
              Select number of owners, employees, and contractors{" "}
            </p>
            <FormControl fullWidth>
              <InputLabel className="form__label" id="demo-simple-select-label">
                Company Size
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Company Size"
                // onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2 - 5}>2-5</MenuItem>
                <MenuItem value={6 - 10}>6-10</MenuItem>
                <MenuItem value={11 - 25}>11-25</MenuItem>
                <MenuItem value={"26+"}>26+</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form__option">
            <p className="form__para">
              Select average monthly revenue before deductions
            </p>
            <FormControl fullWidth>
              <InputLabel className="form__label" id="demo-simple-select-label">
                Monthly Revenue
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Company Size"
                // onChange={handleChange}
              >
                <MenuItem value={0}>$0 (Pre-revenue)</MenuItem>
                <MenuItem value={"1,000"}> $1-$1,000</MenuItem>
                <MenuItem value={"10,000"}>$1,001-$10,000</MenuItem>
                <MenuItem value={"100,000"}>$10,001-$100,000</MenuItem>
                <MenuItem value={"100,000+"}>More than $100,001</MenuItem>
                <MenuItem value={"Unknown"}>I'm not sure</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form__option">
            <label htmlFor="tax-return">
              <h3 className="form__label">Last Tax Return</h3>
            </label>
            <p className="form__para">
              When did you file your last business tax return?
            </p>
            <FormControl fullWidth>
              <InputLabel className="form__label" id="demo-simple-select-label">
                Last Tax Return
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Company Size"
                // onChange={handleChange}
              >
                <MenuItem value={0}>I'm on track with my tax filing</MenuItem>
                <MenuItem value={"1,000"}> Tax year 2021</MenuItem>
                <MenuItem value={"10,000"}>Tax Year 2020</MenuItem>
                <MenuItem value={"100,000"}>Tax year 2019 or prior</MenuItem>
                <MenuItem value={"100,000+"}>My business is new</MenuItem>
                <MenuItem value={"Unknown"}>
                  Unknown/I need help figure this out
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <button onClick={handleSubmit} className="form__button">
              Next
            </button>
          </div>
        </form>
      </div>
      <div className="form__design">
        <img src={design} alt="image" />
      </div>
    </div>
  );
}
