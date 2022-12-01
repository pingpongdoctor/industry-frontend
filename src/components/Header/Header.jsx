// Dependencies
// import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

// Styling
import "./Header.scss";

// Function
export default function Header() {
  return (
    <div className="page-header">
      <div className="ph-nav-left">
        <div classname="nav-item">Pricing</div>
        <div classname="nav-item">Services</div>
        <div classname="nav-item">Resources</div>
        <div classname="nav-item">Community</div>
      </div>
      <div className="ph-logo">
        <Logo logoClassName="logo--header" />
      </div>
      <div className="ph-nav-right">
        <div classname="nav-item">Log In</div>
        <div classname="nav-item">1 (888) 760 1940</div>
        <div classname="nav-item">Start a Free Trail</div>
        <div classname="nav-item">Book a Call</div>
      </div>
    </div>
  );
}
