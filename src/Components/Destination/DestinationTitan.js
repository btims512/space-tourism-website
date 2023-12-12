import React from "react";
// Import your CSS/SCSS file here if needed

function DestinationTitan() {
  return (
    <div>
      {/* Navigation and Content */}
      <nav>
        <ul>
          <li>00 Home</li>
          <li>01 Destination</li>
          <li>02 Crew</li>
          <li>03 Technology</li>
        </ul>
      </nav>

      <section>
        <h1>01 Pick your destination</h1>
        <nav>{/* Navigation for Moon, Mars, Europa, Titan */}</nav>

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
