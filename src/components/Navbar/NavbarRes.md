```



<nav className='flex justify-between items-center mx-8 text-[Poppins] z-10 pt-4 pb-4'>
            <div className=' w-60'><img className='h-10 w-10' src="images/logo.png" alt="logo" /></div>
            <div className='flex items-center text-lg font-regular text-gray-500 gap-14 font-medium'>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">Home</NavLink>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">Events</NavLink>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">About us</NavLink>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">Gallery</NavLink>
                <NavLink className="navs hover:text-slate-400 hover:border-b-2 hover:border-slate-400 transition duration-300 ease-in-out" to="/">Helpdesk</NavLink>
            </div>
            <div className='flex justify-between items-center gap-5'>
                <NavLink to="/signin" className='px-8 py-3 bg-black rounded-2xl justify-center items-center gap-2.5 flex text-white text-md font-normal font-[Poppins] hover:bg-[#212121]/90 transition duration-300 ease-in-out'>
                    Login</NavLink>
                <NavLink to="/signup" className="shadow-sm hover:bg-white/90 transition duration-300 ease-in-out px-5 py-3 bg-white rounded-2xl justify-center items-center gap-2.5 flex text-black text-md font-normal font-['Poppins']">
                    Register</NavLink>
            </div>
        </nav>

```