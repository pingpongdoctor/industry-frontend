import "./Logo.scss";
import benchLogo from "../../Assets/Images/bench-logo.jpeg";
export default function Logo({ logoClassName }) {
  return <img src={benchLogo} alt="bench-logo" className={logoClassName} />;
}
