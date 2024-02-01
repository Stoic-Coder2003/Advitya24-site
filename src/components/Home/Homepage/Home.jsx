import React from 'react';
import './Home.css';
import AboutadVITya from '../About/AboutadVITya';
import Landingpage from './Landingpage';
import DesignDevelop from '../DesignDevelop/DesignDevelop';
import Highlights from '../Highlights/Highlights';
import Countdown from '../Countdown/Countdown';
import EventSchedule from '../EventSchedule/EventSchedule';
import { Footer } from '../../Footer/Footer';

function Home() {
    return (
        <div>
            <Landingpage />
            <AboutadVITya />
            <DesignDevelop />
            <Highlights />
            <Countdown />
            <EventSchedule />
            <Footer />
        </div>
    );
}

export default Home;
