import React from "react";
import { Link } from "react-router-dom";
import "../../App.scss";

import DestinationNav from "./DestinationNav";

function DestinationEuropa() {
  return (
    <div>
      <section>
        <h1>01 Pick your destination</h1>
        <DestinationNav />

        <h2>Europa</h2>
        <p>The smallest of the four Galilean moons...</p>
        {/* Additional content */}
      </section>
    </div>
  );
}

export default DestinationEuropa;
