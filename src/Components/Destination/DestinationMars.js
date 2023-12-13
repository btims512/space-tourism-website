import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import DestinationNav from './DestinationNav';

import "../../App.scss";
import backgroundImg from "../../assets/destination/background-destination-desktop.jpg";

function DestinationMars({ changeBackground }) {
  useEffect(() => {
    changeBackground(backgroundImg);
  }, [changeBackground]);

  return (
    <div>
      <section>
        <h1>01 Pick your destination</h1>
        <DestinationNav />

        <h2>Mars</h2>
        <p>Don’t forget to pack your hiking boots...</p>
      </section>
    </div>
  );
}


export default DestinationMars;
