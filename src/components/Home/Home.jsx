import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <div className='flex justify-center items-center gap-3'>
        <button  className='border-2 border-black rounded-md p-4 w-fit'>
            <Link to="/signin">
            Sign in
            </Link>
        </button>

        <button className='border-2 border-black rounded-md p-4 w-fit'>
            <Link to="/signup">
            Sign up
            </Link>
        </button>

        </div>
        </>
    )
}

export default Home
