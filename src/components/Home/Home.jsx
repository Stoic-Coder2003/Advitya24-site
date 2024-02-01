import React from 'react';
import './Home.css';
import AboutadVITya from './AboutadVITya';
import Landingpage from './Landingpage';
import DesignDevelop from './DesignDevelop/DesignDevelop';

function Home() {
    return (
        <div className='bg-[#E7E5E5]'>
            <Landingpage />
            <AboutadVITya />
            <DesignDevelop />
        </div>
    );
}

export default Home;
