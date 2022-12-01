import "./SiteHeader.scss";
import Logo from "../Logo/Logo";

export default function SiteHeader({ siteHeaderClassName }) {
  return (
    <div>
      <header className={siteHeaderClassName}>
        <Logo logoClassName="logo--sign-up" />
      </header>
    </div>
  );
}
