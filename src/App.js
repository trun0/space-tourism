import React from 'react';
import './App.css';
import Navigation from './components/Navigation/navigation';
import Home from './components/Home/home';
import Destination from './components/Destination/destination';
import Crew from './components/Crew/crew';
import Technology from './components/Technology/technology';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return <BrowserRouter>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
}

export default App;
