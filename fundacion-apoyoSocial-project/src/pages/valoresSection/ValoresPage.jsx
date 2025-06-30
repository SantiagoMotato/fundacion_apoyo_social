
function ValoresPages() {
  return (
    <>
      <main className="w-full min-h-[100vh] italic border-t border-t-stone-300">
        <section className='px-4 sm:px-6 md:px-12 pt-10'>
          <div className='flex flex-col'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#474747] mb-8'>
              Valores de la Fundación Apoyo Social
            </h1>
            <ul className='text-[#666666] list-decimal pl-5 text-base sm:text-lg space-y-5'>
              <li>
                <span className='font-bold'>Solidaridad:</span> Estamos comprometidos con el bienestar de las comunidades vulnerables, ofreciendo apoyo integral y personalizado.
              </li>
              <li>
                <span className='font-bold'>Responsabilidad Social:</span> Trabajamos con ética y compromiso para generar un impacto positivo y sostenible.
              </li>
              <li>
                <span className='font-bold'>Innovación:</span> Buscamos soluciones creativas y efectivas que atiendan las necesidades de las comunidades.
              </li>
              <li>
                <span className='font-bold'>Colaboración:</span> Creemos en la unión de esfuerzos con entidades públicas y privadas para lograr objetivos comunes.
              </li>
              <li>
                <span className='font-bold'>Inclusión:</span> Atendemos a todos sin discriminación de edad, género, cultura o estrato social.
              </li>
              <li>
                <span className='font-bold'>Excelencia:</span> Nos esforzamos por ofrecer servicios de alta calidad en todos nuestros proyectos.
              </li>
              <li>
                <span className='font-bold'>Transparencia:</span> Actuamos con honestidad y claridad en cada uno de nuestros procesos.
              </li>
            </ul>
          </div>
        </section>

        <footer className='w-full h-full mt-10 pt-5 bg-white border-t border-gray-200'>
          <div className='flex flex-col justify-center items-center w-full h-full text-sm sm:text-base gap-3 px-4'>
            <div className='w-24 h-24'>
              <img src="/images/apoyoSocial.jpg" alt="Logo Fundación Apoyo Social" className='w-full h-full object-contain' />
            </div>
            <p className='text-gray-500 text-center'>
              © Copyright 2025 | Todos los derechos reservados
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default ValoresPages
