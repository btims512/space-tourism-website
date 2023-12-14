import React, { useEffect } from "react";
import "../../App.scss";
import backgroundImg from "../../assets/destination/background-destination-desktop.jpg";
import DestinationNav from "./DestinationNav";

function DestinationMoon({ changeBackground }) {
  useEffect(() => {
    changeBackground(backgroundImg);
  }, [changeBackground]);

  return (
    <div className="destination-section">
      <DestinationNav />
      <div className="destination-content">
        <div className="text-content">
          <h1>01 PICK YOUR DESTINATION</h1>
          <h2>Moon</h2>
          <p>See our planet as you’ve never seen it before...</p>
          {/* Additional details here */}
        </div>
        <div className="moon-image">
          {/* Insert image of the moon here */}
        </div>
      </div>
    </div>
  );
}

export default DestinationMoon;
