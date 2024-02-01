import React from 'react'
import './Event.css'
import { Card } from './Card';

const cardData = [
    {
      id: 1,
      imgSrc: 'images/event1.png',
      title: 'Meet up Freelancer',
      description: 'Get insights for freelancing from great mentors.',
    },
    {
      id: 2,
      imgSrc: 'images/event2.png',
      title: 'Metal Band Concert',
      description: 'Rock the stage with the metal band we have for you!',
    },
    {
        id: 3,
        imgSrc: 'images/event3.png',
        title: 'Geeks for Geeks: Hack-Exchange',
        description: 'Explore knowledge from the outside world with great mentors',
      },
      {
        id: 4,
        imgSrc: 'images/event4.png',
        title: 'Beatbox Battle Festival ',
        description: 'Beatbox your beats with the music club of VIT Bhopal',
      },
      {
        id: 5,
        imgSrc: 'images/event5.png',
        title: 'Design Your Dream',
        description: "Color your life with us, let's join the design festival now",
      },
      {
        id: 6,
        imgSrc: 'images/event6.png',
        title: 'The Yellow Diary',
        description: 'Welcome the singers of albums like, Roz-Roz and Marz',
      },
  ];

function EventSchedule() {
    return (
        <section className='flex flex-col justify-center mb-96 items-center'>
            <p className='font-[Rubik] text-7xl font-semibold mb-24'>Event Schedule</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-16 gap-y-20">
            {cardData.map((card) => (
                <Card
                key={card.id}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                />
            ))}
            </div>
        </section>
    )
}

export default EventSchedule
