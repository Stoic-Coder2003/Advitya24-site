import React from 'react'
import Navbar from '../Navbar/Navbar'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import { Footer } from '../Footer/Footer'
import './Gallery.css'

function Gallery() {

    return (
        <div className='gap-10 font-[Poppins]'>
        <div className='mb-24'>
        <Navbar />
        </div>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Footer />
        </div>
    )
}

export default Gallery
