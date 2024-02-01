import React from 'react';

export function Card({ imgSrc, title, description }) {
  return (
   <div className=' hover:border-purple-600 hover:scale-105 transition duration-300 ease-in-out z-0'>
     <div className="w-[300px] rounded-md border">
      <img
        src={imgSrc}  
        alt="event"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>  
        <p className="mt-3 text-sm text-gray-600">{description}</p> 
    
      </div>
    </div>
   </div>
  );
}
