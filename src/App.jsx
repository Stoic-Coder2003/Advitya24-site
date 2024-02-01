import React from 'react';
import ParticleRing1 from './components/Signup/ParticleRing1';
import ParticleRing from './components/Signin/ParticleRing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Homepage/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<ParticleRing />} />
          <Route path="/signup" element={<ParticleRing1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
