import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./Components/NavBar/NavBar";

import MainPage from "./Components/Home/MainPage";
import DestinationEuropa from "./Components/Destination/DestinationEuropa";
import DestinationMars from "./Components/Destination/DestinationMars";
import DestinationMoon from "./Components/Destination/DestinationMoon"; // Import other destination components
import DestinationTitan from "./Components/Destination/DestinationTitan";

import CrewCommander from "./Components/Crew/CrewCommander"; // Import crew components
import CrewEngineer from "./Components/Crew/CrewEngineer";
import CrewPilot from "./Components/Crew/CrewPilot";
import CrewSpecialist from "./Components/Crew/CrewSpecialist";

import TechnologyCapsule from "./Components/Technology/TechnologyCapsule"; // Import technology components
import TechnologySpaceport from "./Components/Technology/TechnologySpaceport";
import TechnologyVehicle from "./Components/Technology/TechnologyVehicle";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    "./assets/home/background-home-desktop.jpg"
  );

  return (
    <Router>
      <div
        className="App"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<MainPage changeBackground={setBackgroundImage} />}
          />
          <Route
            path="/destinations/moon"
            element={<DestinationMoon changeBackground={setBackgroundImage} />}
          />
          <Route
            path="/destinations/mars"
            element={<DestinationMars changeBackground={setBackgroundImage} />}
          />
          <Route
            path="/destinations/europa"
            element={
              <DestinationEuropa changeBackground={setBackgroundImage} />
            }
          />
          <Route
            path="/destinations/titan"
            element={<DestinationTitan changeBackground={setBackgroundImage} />}
          />
          <Route
            path="/crew/engineer"
            element={<CrewEngineer changeBackground={setBackgroundImage} />}
          />
          <Route
            path="/technology/vehicle"
            element={
              <TechnologyVehicle changeBackground={setBackgroundImage} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
