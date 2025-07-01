import React from 'react';

function ContenidoUno() {
  const items = [
    {
      image: '/images/CardImages/photo1.jpg',
      title: 'VACCINES',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ligula ullamcorper.'
    },
    {
      image: '/images/CardImages/photo2.jpg',
      title: 'EDUCATION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ligula ullamcorper.'
    },
    {
      image: '/images/CardImages/photo6.jpg',
      title: 'CLEAN WATER',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ligula ullamcorper.'
    },
    {
      image: '/images/CardImages/photo4.jpg',
      title: 'HEALTHCARE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ligula ullamcorper.'
    },
    {
      image: '/images/CardImages/photo5.jpg',
      title: 'SCHOOL ACCESS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ligula ullamcorper.'
    },
    {
      image: '/images/CardImages/photo3.jpg',
      title: 'NUTRITION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ligula ullamcorper.'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-95 transition">
          <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-blue-500 font-semibold text-lg tracking-widest mb-4">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed border-t pt-4 border-gray-200">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContenidoUno;
