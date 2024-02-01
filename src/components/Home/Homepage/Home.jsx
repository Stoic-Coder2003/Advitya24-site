import React from 'react';
import './Home.css';
import AboutadVITya from '../About/AboutadVITya';
import Landingpage from '../Landingpage';
import DesignDevelop from '../DesignDevelop/DesignDevelop';
import Highlights from '../Highlights/Highlights';
import Countdown from '../Countdown/Countdown';

function Home() {
    return (
        <div>
            <Landingpage />
            <AboutadVITya />
            <DesignDevelop />
            <Highlights />
            <Countdown />
        </div>
    );
}

export default Home;
