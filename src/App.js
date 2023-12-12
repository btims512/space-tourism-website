import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import MainPage from './Components/Home/index';
import DestinationEuropa from './Components/Destination/DestinationEuropa';
import DestinationMars from './Components/Destination/DestinationMars';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Other routes go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
