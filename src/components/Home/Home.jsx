import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Encrypt from './Encrypt';

function Home() {
    return (
        <>
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
            <section className='mx-24 mb-36 flex justify-between items-center'>
                <div className='flex flex-col justify-start'>
                    <p className='font-bold text-7xl mb-8'>About AdVITya</p>
                    <p className='w-fit text-2xl font-normal leading-8 mb-6'>
                    AdVITya’24 unfolds with a vibrant mix <br /> of student-friendly events. Tech <br /> 
                    enthusiasts, brace yourself for an <br /> 
                    exciting lineup—workshops, demos, <br /> 
                    and competitions. Whether you're a <br /> 
                    seasoned pro or a curious newbie, <br /> 
                    there's something for everyone to learn <br /> 
                    and grow. Don't miss out on the fun!
                    </p>
                    {/* <button className='bg-[#0B0311] rounded-xl px-8 py-4 text-white w-fit hover:text-[#0B0311] hover:bg-white hover:border-[1px] hover:border-[#0B0311]'>More About us</button> */}
                    <Encrypt />
                </div>
                <div className='rightdiv'>
                    <img src="images\Group 5.png" alt="img1" />
                </div>
            </section>
        </>
    );
}

export default Home;
