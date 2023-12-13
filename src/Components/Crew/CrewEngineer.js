import React, { useEffect } from "react";
import "../../App.scss";

import backgroundImg from "../../assets/crew/background-crew-desktop.jpg";

function CrewEngineer({ changeBackground }) {
  useEffect(() => {
    changeBackground(backgroundImg);
  }, [changeBackground]);

  return (
    <div>
      <section>
        <h1>02 Meet your crew</h1>

        <h2>Flight Engineer</h2>
        <h3>Anousheh Ansari</h3>
        <p>
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems...
        </p>
      </section>
    </div>
  );
}

export default CrewEngineer;
