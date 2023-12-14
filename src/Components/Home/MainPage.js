import React, { useEffect } from 'react';
import "../../App.scss";

function MainPage({ changeBackground }) {
  useEffect(() => {
    changeBackground('./assets/home/background-home-desktop.jpg');
}, [changeBackground]);

return (
  <div className="homepage">
    <div className='container'>
      <div className='content'>
        <h5>So, you want to travel to</h5>
        <div className='space'><h1>SPACE</h1></div>
        <div className='p'><p>Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!</p></div>
      </div>
      <button className="explore-button"><h4>Explore</h4></button>
    </div>
  </div>
);
}

export default MainPage;
