// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Homepage/Home';
import Signin from './components/Home/Signin/Signin';
import LoadingSpinner from './components/LoadingSpinner';
import Gallery from './components/Gallery/Gallery';
import Error404 from './components/ErrorPage/Error404';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async task (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed
  }, []);

  return (
    <>
      <Router>
        {loading && <LoadingSpinner />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Error404 />}
                />
        </Routes>
      </Router>
    </>
  );
}

export default App;
