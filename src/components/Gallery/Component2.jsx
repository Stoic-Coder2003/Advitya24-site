import React from 'react'

function Component2() {
    return (
        <div className='flex items-center justify-center gap-4 mb-32 relative'>
        <img src="images/second-image.png" alt="img" />
        <div className='absolute flex justify-between items-start gap-x-32 mb-12'>
            <div>
            <p className='text-white font-bold text-5xl mb-5'>Shirley Sethia</p>
            <p className='opacity-70 font-bold text-white text-left mb-9'>Shirley Sethia is a renowned singer with famous songs <br /> to her name. This YouTube celebrity was invited by VIT <br /> Bhopal for adVITya'23. 
               Her show was loved by the <br /> audience, making students wave their hands high in <br /> the sky while vibing to the music.</p>
            <img src="images/button_vid.png" alt="btn" />
            </div>
            <div>
            <p className='text-white font-bold text-5xl mb-5'>Bombay Bandook</p>
            <p className='opacity-70 font-bold text-white text-left mb-14'>Bombay Bandook is a renowned music band known for <br /> their exceptional performances. Their show was loved <br /> by the audience, making students wave their hands <br /> high in the sky while vibing to the music.</p>
            <img src="images/button_vid.png" alt="btn" />
            </div>
        </div>
        </div>
    )
}

export default Component2
