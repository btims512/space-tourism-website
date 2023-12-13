import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import backgroundImg from "../../assets/destination/background-destination-desktop.jpg";

import DestinationNav from "./DestinationNav";

function DestinationMoon({ changeBackground }) {
  useEffect(() => {
    changeBackground(backgroundImg);
  }, [changeBackground]);

  return (
    <div>
      <section>
        <h1>01 Pick your destination</h1>
        <DestinationNav />

        <h2>Moon</h2>
        <p>Don’t forget to pack your hiking boots...</p>
      </section>
    </div>
  );
}

export default DestinationMoon;
