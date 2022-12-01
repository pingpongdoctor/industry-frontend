import "./SignUpBiz.scss";

import Logo from "../components/Logo/Logo";

export default function () {
  return (
    <div className="sign-up-biz">
      <div className="form">
        <form action="OnSubmit">
          <Logo logoClassName="logo--form" />
          <h1>Tell us about your business</h1>
          <h3>continued...</h3>
          <div>
            <label htmlFor="company size">
              <h3>Company Size</h3>
            </label>
            <p>Select number of owners, employees, and contractors </p>
            <select name="employees">
              <option value="select">-select-</option>
              <option value="1" className="form__option--value">
                1
              </option>
              <option value="2-5" className="form__option--value">
                2-5
              </option>
              <option value="6-10" className="form__option--value">
                6-10
              </option>
              <option value="11-25" className="form__option--value">
                11-25
              </option>
              <option value="26+" className="form__option--value">
                26+
              </option>
              {/* <option value="unsure" className="form__option--value">I'm not sure</option> */}
            </select>
          </div>
          <div>
            <label htmlFor="Revenue">
              <h3>Monthly Revenue</h3>
            </label>
            <p>Select average monthly revenue before deductions</p>
            <select name="revenue">
              <option value="0" className="form__option--value">
                -select-
              </option>
              <option value="0" className="form__option--value">
                $0 (Pre-revenue)
              </option>
              <option value="1" className="form__option--value">
                $1-$1,000
              </option>
              <option value="2" className="form__option--value">
                $1,001-$10,000
              </option>
              <option value="3" className="form__option--value">
                %10,001-$100,000
              </option>
              <option value="4" className="form__option--value">
                More than $100,001
              </option>
              <option value="5" className="form__option--value">
                I'm not sure
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="tax-return">
              <h3>Last Tax Return</h3>
            </label>
            <p>When did you file your last business tax return?</p>
            <select name="tax-return">
              <option value="0" className="form__option--value">
                -select-
              </option>
              <option value="1" className="form__option--value">
                I'm on track with my tax filing
              </option>
              <option value="2" className="form__option--value">
                Tax year 2021
              </option>
              <option value="3" className="form__option--value">
                Tax Year 2020
              </option>
              <option value="4" className="form__option--value">
                Tax year 2019 or prior
              </option>
              <option value="5" className="form__option--value">
                My business is new
              </option>
              <option value="5" className="form__option--value">
                Unknown/I need help figure this out
              </option>
            </select>
            <div>
              <button>Next</button>
            </div>
          </div>
        </form>
      </div>
      <div className="design">
        <p>Placeholder for design</p>
      </div>
    </div>
  );
}
