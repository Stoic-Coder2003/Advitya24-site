import React from 'react';
import Signin from './components/Signin/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Homepage/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
