import React from 'react';
import LoginModal from './Login.js';
import Home from './components/Home.jsx';
import Desc from './components/Description.jsx';
import Listing from './components/Listings.jsx';
import Missions from './components/Missions.jsx';
import FirstMission from './components/FirstMission.jsx';
import End from './components/End.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/Code-Warriors-DeltaHacks-9" element={<LoginModal />} />
          <Route path="/Code-Warriors-DeltaHacks-9/home" element={<Home />} />
          <Route path="/Code-Warriors-DeltaHacks-9/description" element={<Desc />} />
          <Route path="/Code-Warriors-DeltaHacks-9/listings" element={<Listing />} />
          <Route path="/Code-Warriors-DeltaHacks-9/missions" element={<Missions />} />
          <Route path="/Code-Warriors-DeltaHacks-9/firstmission" element={<FirstMission />} />
          <Route path="/Code-Warriors-DeltaHacks-9/end" element={<End />} />
        </Routes>
      </BrowserRouter>
    );
  }


export default App;

