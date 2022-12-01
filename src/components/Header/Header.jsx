// Dependencies
// import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

// Styling
import "./Header.scss";

// Function
export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__nav-left">
          <div classname="header__nav-item">Pricing</div>
          <div classname="header__nav-item">Services</div>
          <div classname="header__nav-item">Resources</div>
          <div classname="header__nav-item">Community</div>
        </div>
        <div className="header__logo-div">
          <Logo logoClassName="logo--header" />
        </div>
        <div className="header__nav-right">
          <div classname="header__nav-item">Log In</div>
          <div classname="header__nav-item">1 (888) 760 1940</div>
          <div classname="header__nav-item">Start a Free Trail</div>
          <div classname="header__nav-item">Book a Call</div>
        </div>
      </div>
    </div>
  );
}
