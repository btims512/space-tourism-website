import React from "react";
import { Link } from "react-router-dom";

function DestinationNav() {
  return (
    <div>
      <nav className="navbar dest-nav">
        <ul>
          <li>
            <Link to="/destinations/moon">Moon</Link>
          </li>
          <li>
            <Link to="/destinations/mars">Mars</Link>
          </li>
          <li>
            <Link to="/destinations/europa">Europa</Link>
          </li>
          <li>
            <Link to="/destinations/titan">Titan</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DestinationNav;
