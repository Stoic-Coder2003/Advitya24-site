import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex justify-between items-center mx-5 text-[Poppins] z-10'>
            <img src="images\advityaLogosmall.png" alt="logo" />
            <div className='flex items-center text-md font-regular text-black gap-12'>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">Home</NavLink>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">Events</NavLink>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">About us</NavLink>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">Gallery</NavLink>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">Helpdesk</NavLink>
            </div>
            <div className='flex justify-between items-center gap-5 pr-3'>
                <button className='px-8 py-3 bg-black rounded-2xl justify-center items-center gap-2.5 flex text-white text-lg font-normal font-[Poppins] hover:bg-[#212121]/90 transition duration-300 ease-in-out'>
                    Login</button>
                <button className="shadow-sm hover:bg-white/90 transition duration-300 ease-in-out px-5 py-4 bg-white rounded-2xl justify-center items-center gap-2.5 flex text-black text-lg font-normal font-['Poppins']">
                    Register</button>
            </div>
        </nav>
    )
}

export default Navbar
