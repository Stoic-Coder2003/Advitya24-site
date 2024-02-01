import React from 'react'
import Navbar from '../Navbar/Navbar'

function Landingpage() {
    return (
        <section className='flex flex-col justify-center items-center relative mb-24'>
             <div className='relative'>
                <img className='w-screen' src="images\Main-background.png" alt="main-bg" />
                <div className='absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2'>
                    <p className='text-[Inter] text-7xl font-black text-white'>
                    Where Event <br /> Dreams Transform <br /> Into Reality!
                    </p>
                    <p className='font-semibold text-white text-lg mt-8'>Embark on a journey where your event dreams come to life! Join us <br /> at adVITya, where creativity meets celebration, and unforgettable <br /> moments are made. Get ready for an extravaganza like never before. <br /> Your dreams, our canvas. Let the festivities begin!</p>
                </div>
             </div>


                <div className='w-full fixed top-[-25px]'>
                <Navbar />
                </div>
            </section>
    )
}

export default Landingpage
