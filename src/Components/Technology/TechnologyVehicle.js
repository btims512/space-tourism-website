import React, { useEffect } from "react";

import backgroundImg from "../../assets/technology/background-technology-desktop.jpg";

function TechnologyVehicle({ changeBackground }) {
  useEffect(() => {
    changeBackground(backgroundImg);
  }, [changeBackground]);

  return (
    <div>
      <section>
        <h1>03 Space launch 101</h1>
        <nav>{/* Navigation for 1, 2, 3 */}</nav>

        <h2>The terminology...</h2>
        <h3>Launch vehicle</h3>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space...
        </p>
        {/* Additional content */}
      </section>
    </div>
  );
}

export default TechnologyVehicle;
