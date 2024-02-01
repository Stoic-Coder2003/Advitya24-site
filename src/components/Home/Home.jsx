import React from 'react';
import './Home.css';
import AboutadVITya from './AboutadVITya';
import Landingpage from './Landingpage';
import DesignDevelop from './DesignDevelop/DesignDevelop';

function Home() {
    return (
        <>
            <Landingpage />
            <AboutadVITya />
            <DesignDevelop />
        </>
    );
}

export default Home;
