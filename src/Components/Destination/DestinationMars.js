import React from "react";
// Import your CSS/SCSS file here if you have any

function DestinationMars() {
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

        <h2>Mars</h2>
        <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons...
        </p>
        {/* Additional content */}
      </section>
    </div>
  );
}

export default DestinationMars;
