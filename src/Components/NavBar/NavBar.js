import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "./logo.svg";
import Line from "./line.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={Logo} alt="Logo" style={{ marginLeft: "30px" }} />
        <img src={Line} alt="Line" style={{ width: "400px" }} />
        <ul>
          <li>
            <Link to="/">00 Home</Link>
          </li>
          <li>
            <Link to="/destinations/moon">01 Destination</Link>
          </li>
          <li>
            <Link to="/crew/engineer">02 Crew</Link>
          </li>
          <li>
            <Link to="/technology/vehicle">03 Technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
