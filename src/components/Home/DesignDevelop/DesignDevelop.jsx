import React from 'react'
import './DesignDevelop.css'

function DesignDevelop() {
    return (
        <>
        <section className='mx-24 mb-36 flex justify-evenly items-center'>
            <div className='flex flex-col justify-center'>
                <div className=' mr-20'>
                <p className='font-[Rubik] text-8xl font-semibold flex items-end mb-2'>Design <img className='px-1 pb-2' src='images\design.png' alt='img' /> .</p>
                <p className='font-[Rubik] text-8xl font-semibold flex items-end mb-2'>Develop <img className='px-1 pb-2' src='images\develop.png' alt='img' /> .</p>
                <p className='font-[Rubik] text-8xl font-semibold flex items-end'>Discover <img className='px-1 pb-2' src='images\discover.png' alt='img' /> .</p>    
                </div>
                <img className='mt-[-150px] ml-20' src="images\DesignDevelop.png" alt="img" />
                <p className=' text-3xl font-medium font-[Inter] flex justify-end ml-48 mt-[-200px]'>
                Explore new ideas as you create <br /> and deploy products in <br /> hackathons. <br /> 
                Create a network with the <br /> brightest minds of VIT Bhopal <br /> and experience a tech savvy <br /> environment like never before.
                </p>
            </div>
        </section>
        </>
    )
}

export default DesignDevelop
