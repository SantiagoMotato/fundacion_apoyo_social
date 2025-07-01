import React from 'react';

function ContenidoDos() {
  const items = [
    {
      image: '/images/CardImages/photo1.jpg',
  
    },
    {
      image: '/images/CardImages/photo2.jpg',

    },
    {
      image: '/images/CardImages/photo6.jpg',
  
    },
    {
      image: '/images/CardImages/photo4.jpg',
    
    },
    {
      image: '/images/CardImages/photo5.jpg',
     
    },
    {
      image: '/images/CardImages/photo3.jpg',
  
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-22 md:mt-24 lg:mt-28 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-110 p-3 transition">
          <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-lg" />
        </div>
      ))}
    </div>
  );
}

export default ContenidoDos;
