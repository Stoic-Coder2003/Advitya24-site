import React from 'react'

function Image({imgSrc, title}) {
    return (
       <>
            <div className='w-72 h-64 relative flex justify-center'>
            <img src={imgSrc} alt="img" />
            <p className='top-8 text-2xl font-bold absolute text-white'>{title}</p>
            </div>
        </>         
    )
}

export default Image
