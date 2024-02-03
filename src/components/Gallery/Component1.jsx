import React from 'react'
import Image from './Image'

function Component1() {
    const val = [
        {
            id: 1,
            imgSrc: 'images/i3.png',
            title: 'Technical Events'
        },
        {
            id: 2,
            imgSrc: 'images/i4.png',
            title: 'Non Tech Events'
        },
        {
            id: 3,
            imgSrc: 'images/i5.png',
            title: 'Concerts and Music'
        },
        {
            id: 4,
            imgSrc: 'images/BTN.png',
            title: 'Dance and Culture'
        },
    ];

    return (
        <>
        <div className='flex items-end justify-center gap-4 mb-32'>
            <img src="public\images\Banner.png" alt="img" />
            <div className='flex flex-col justify-end gap-32'>
                <h2 className='text-5xl font-bold pl-6'>AdVITya'23 <br /> <span className='text-[#0068CA] font-bold'>Event Gallery</span></h2>
            <div className='grid grid-cols-2 gap-4'>
                 {val.map((values) => (
                <Image
                key={values.id}
                imgSrc={values.imgSrc}
                title={values.title}
                />
            ))}
                </div>
            </div>
            </div>
        </>
    )
}

export default Component1
