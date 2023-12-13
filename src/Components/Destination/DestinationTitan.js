import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.scss";

import DestinationNav from "./DestinationNav";

function DestinationTitan() {
  return (
    <div>
      <section>
        <h1>01 Pick your destination</h1>
        <DestinationNav />

        <h2>Titan</h2>
        <p>
          The only moon known to have a dense atmosphere other than Earth...
        </p>
        {/* Additional content */}
      </section>
    </div>
  );
}

export default DestinationTitan;
