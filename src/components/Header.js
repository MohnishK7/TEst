import { LOGO_URL } from "../utils/contants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-conntainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
