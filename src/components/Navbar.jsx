import { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";
import "../Styles/Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="navbar">
      <div className="web-navbar">
        <img src={logo} className="logo" />

        <div className="nav-items">
          <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="login-signup">
          <button className="login">
            <img src={lock} />
            Login
          </button>
          <button className="signup">Sign Up For Free</button>
        </div>

        <div className="hamburgerMenuIcon" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div className={toggle ? "dropdownMenu" : "dropdownMenuHide"}>
        <ul>
          <li className="dropdownItem">Home</li>
          <li className="dropdownItem">About</li>
          <li className="dropdownItem">Support</li>
          <li className="dropdownItem">Platform</li>
          <li className="dropdownItem">Pricing</li>
          <div className="login-signup">
            <button className="login">
              <img src={lock} />
              Login
            </button>
            <button className="signup">Sign Up For Free</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
