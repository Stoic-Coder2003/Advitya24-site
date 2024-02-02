import React from 'react';
import { Element } from 'react-scroll';
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
            <Element name="home">
                <Landingpage />
            </Element>
            <Element name="about-section">
                <AboutadVITya />
            </Element>
            <Element name="designdevelop">
                <DesignDevelop />
            </Element>
            <Element name="highlights">
                <Highlights />
            </Element>
            <Element name="events">
                <Countdown />
            </Element>
            <Element name="eventschedule">
                <EventSchedule />
            </Element>
            <Footer />
        </div>
    );
}

export default Home;
