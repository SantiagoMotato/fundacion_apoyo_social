import React from 'react';

function ContenidoUno() {
  const items = [
    {
      image: '/images/CardImages/photo1.jpg',
      title: 'Salud Comunitaria',
      description: 'Promovemos el acceso integral a servicios de salud para comunidades vulnerables, realizando jornadas médicas, campañas de prevención y apoyo psicosocial, en articulación con entidades públicas y privadas.'
    },
    {
      image: '/images/CardImages/photo2.jpg',
      title: 'Educación con Propósito',
      description: 'Desarrollamos actividades pedagógicas que fortalecen los procesos de aprendizaje y fomentan el desarrollo integral de niños, niñas y adolescentes, generando oportunidades de futuro desde la educación.'
    },
    {
      image: '/images/CardImages/photo6.jpg',
      title: 'Agua Limpia y Saneamiento',
      description: 'Impulsamos el acceso al agua potable como derecho fundamental, implementando soluciones sostenibles que mejoran las condiciones de vida y previenen enfermedades en zonas rurales y marginadas.'
    },
    {
      image: '/images/CardImages/photo4.jpg',
      title: 'Alimentación y Nutrición',
      description: 'Luchamos contra la desnutrición mediante la entrega de alimentos y el desarrollo de programas nutricionales que garantizan una alimentación adecuada para las familias en situación de vulnerabilidad.'
    },
    {
      image: '/images/CardImages/photo5.jpg',
      title: 'Acceso Escolar para Todos',
      description: 'Facilitamos el acceso a la educación básica a través de iniciativas que apoyan la permanencia escolar, fortalecen la infraestructura educativa y brindan acompañamiento a estudiantes en riesgo de deserción.'
    },
    {
      image: '/images/CardImages/photo3.jpg',
      title: ' Alianzas para el Desarrollo',
      description: 'Tejemos redes de colaboración con alcaldías, gobernaciones, empresas y organismos como el ICBF, canalizando recursos y esfuerzos para multiplicar el impacto de nuestros proyectos sociales.'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-95 transition">
          <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-blue-500 font-semibold text-lg tracking-widest mb-4 uppercase">{item.title}</h3>
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
