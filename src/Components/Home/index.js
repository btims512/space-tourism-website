import React from "react";
import "../../App.scss";

function MainPage() {
  return (
    <div>
      {/* Content from your index.js HTML file */}
      <nav>
        <ul>
          <li>00 Home</li>
          <li>01 Destination</li>
          <li>02 Crew</li>
          <li>03 Technology</li>
        </ul>
      </nav>

      <section>
        <h1>So, you want to travel to Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <button>Explore</button>
      </section>
    </div>
  );
}

export default MainPage;
