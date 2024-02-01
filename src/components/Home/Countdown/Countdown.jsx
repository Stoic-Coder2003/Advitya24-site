import React from 'react'
import ShiftingCountdown from './ShiftingCountdown'

function Countdown() {
    return (
        <>
        <section className='mb-96'>
        <div className='flex flex-col justify-center items-center'>
            <p className='font-[Rubik] text-7xl font-semibold mb-16'>The Coundown Begins!</p>
        </div>
        <ShiftingCountdown />
        </section>
        </>
    )
}

export default Countdown
